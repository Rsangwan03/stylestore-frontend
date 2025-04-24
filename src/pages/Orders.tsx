import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Order } from '../types';
import axios from 'axios';

interface ApiOrder {
  id: number;
  user_email: string;
  product_id: number;
  quantity: number;
  price: number;
  status: string;
  created_at: string;
}

export default function Orders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get<ApiOrder[]>(
          'http://4.217.178.150:8000/api/orders',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const groupedOrders = response.data.reduce((acc: Order[], apiOrder) => {
          const existingOrder = acc.find(o => o.id === apiOrder.id);
          if (existingOrder) {
            existingOrder.items.push({
              id: apiOrder.product_id,
              name: `Product ${apiOrder.product_id}`,
              price: apiOrder.price,
              quantity: apiOrder.quantity,
              image: ""
            });
            existingOrder.total += apiOrder.price * apiOrder.quantity;
          } else {
            acc.push({
              id: apiOrder.id,
              date: apiOrder.created_at,
              status: apiOrder.status,
              total: apiOrder.price * apiOrder.quantity,
              items: [{
                id: apiOrder.product_id,
                name: `Product ${apiOrder.product_id}`,
                price: apiOrder.price,
                quantity: apiOrder.quantity,
                image: ""
              }]
            });
          }
          return acc;
        }, []);

        setOrders(groupedOrders);
      } catch (error) {
        console.error('Order fetch error:', error);
        alert('Failed to fetch orders. Please try again later.');
      }
    };

    if (user && token) {
      fetchOrders();
    }
  }, [user, token]);

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-gray-600">Please login to view your orders</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-600">Order #{order.id}</p>
                <p className="text-sm text-gray-600">
                  {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <div>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                  {order.status}
                </span>
              </div>
            </div>
            <div className="divide-y">
              {order.items.map((item) => (
                <div key={item.id} className="py-4 flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600">
                      Quantity: {item.quantity} × ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <p className="text-right font-bold">
                Total: ${order.total.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
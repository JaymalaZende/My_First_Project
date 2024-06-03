import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StockAlert() {
    const [stockData, setStockData] = useState([]);
    const [nextProductId, setNextProductId] = useState(1);
    const [editingProductId, setEditingProductId] = useState(null);
    const [editedProduct, setEditedProduct] = useState({
        id: null,
        name: '',
        quantity: '',
        price: ''
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/products');
            setStockData(response.data);
            setNextProductId(response.data.length + 1);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleAddProduct = async () => {
        const newProduct = {
            id: nextProductId,
            name: `Product ${nextProductId}`,
            quantity: 0,
            price: 0
        };

        try {
            const response = await axios.post('http://localhost:3000/products', newProduct);
            const addedProduct = response.data;
            setStockData([...stockData, addedProduct]);
            setNextProductId(nextProductId + 1);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };
    const checkStockQuantity = () => {         
        stockData.forEach(product => {             
            if (product.quantity <= 100) {                
                 alert(`Attention: Only ${product.quantity} units of ${product.name} remaining.`);       
                      }   
                          });   
                          };

    const handleEditProduct = (product) => {
        setEditingProductId(product.id);
        setEditedProduct(product);
    };

    const handleSaveEdit = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/products/${editedProduct.id}`, editedProduct);
            console.log('Response from server:', response.data);
            const updatedData = stockData.map(product =>
                product.id === editedProduct.id ? response.data : product
            );
            console.log('Updated data:', updatedData);
            setStockData(updatedData);
            setEditingProductId(null);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleDeleteProduct = async (productId) => {
        const confirmation = window.confirm("Are you sure you want to delete this product?");
        if (confirmation) {
            try {
                await axios.delete(`http://localhost:3000/products/${productId}`);
                console.log('Product deleted successfully:', productId);
                const updatedData = stockData.filter(product => product.id !== productId);
                setStockData(updatedData);
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-4">Stock List</h2>
            <button className="bg-blue-500 text-white py-2 px-4 mb-4" onClick={handleAddProduct}>Add New Product</button>
            <div className="overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Quantity</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stockData.map(product => (
                            <tr key={product.id}>
                                <td className="border px-4 py-2">{product.id}</td>
                                <td className="border px-4 py-2">
                                    {editingProductId === product.id ? (
                                        <input
                                            type="text"
                                            value={editedProduct.name}
                                            onChange={e => setEditedProduct({ ...editedProduct, name: e.target.value })}
                                            className="w-full"
                                        />
                                    ) : (
                                        product.name
                                    )}
                                </td>
                                <td className="border px-4 py-2">
                                    {editingProductId === product.id ? (
                                        <input
                                            type="number"
                                            value={editedProduct.quantity}
                                            onChange={e => setEditedProduct({ ...editedProduct, quantity: e.target.value })}
                                            className="w-full"
                                        />
                                    ) : (
                                        product.quantity
                                    )}
                                </td>
                                <td className="border px-4 py-2">
                                    {editingProductId === product.id ? (
                                        <input
                                            type="number"
                                            value={editedProduct.price}
                                            onChange={e => setEditedProduct({ ...editedProduct, price: e.target.value })}
                                            className="w-full"
                                        />
                                    ) : (
                                        product.price
                                    )}
                                </td>
                                <td className="border px-4 py-2">
                                    {editingProductId === product.id ? (
                                        <button className="bg-green-500 text-white py-1 px-2 mr-2" onClick={handleSaveEdit}>Save</button>
                                    ) : (
                                        <React.Fragment>
                                            <button className="bg-blue-500 text-white py-1 px-2 mr-2" onClick={() => handleEditProduct(product)}>Edit</button>
                                            <button className="bg-red-500 text-white py-1 px-2" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                                        </React.Fragment>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StockAlert;

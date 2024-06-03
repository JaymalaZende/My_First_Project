import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

function Invoice() {
  const [formData, setFormData] = useState({
    customerName: '',
    billNumber: '',
    date: '',
    products: [] // Initialize products as an empty array
  });

  useEffect(() => {
    generateBillNumber();
  }, []);

  const generateBillNumber = () => {
    const generatedBillNumber = Math.floor(Math.random() * 10);
    setFormData({ ...formData, billNumber: generatedBillNumber.toString() });
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const products = [...formData.products];
    products[index][name] = value;
    setFormData({ ...formData, products });
  };

  const handleAddRow = () => {
    const products = [...formData.products, { productName: '', quantity: '', price: '', total: '' }];
    setFormData({ ...formData, products });
  };

  const calculateTotal = () => {
    let grandTotal = 0;
    formData.products.forEach(product => {
      const total = parseFloat(product.quantity) * parseFloat(product.price);
      grandTotal += isNaN(total) ? 0 : total;
      product.total = isNaN(total) ? '' : total.toFixed(2);
    });
    return grandTotal.toFixed(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/invoices', formData);
      alert('Invoice submitted successfully!');
    } catch (error) {
      console.error('Error submitting invoice:', error);
      alert('Failed to submit invoice. Please try again later.');
    }
  };

  const generatePDF = () => {
    const pdf = new jsPDF();

    const imageUrl = 'https://cdn.pixabay.com/photo/2017/06/22/14/23/twitter-2430933_640.png';
  pdf.addImage(imageUrl, 'PNG', 150, 10, 30, 30); // Adjust width and height here
    // Business Name
    pdf.setFontSize(16);
    pdf.text("Shree Smarth Nursery", 200, 50, null, null, 'right');

    // Title
    pdf.setFontSize(20);
    pdf.text("Invoice", 105, 65, null, null, 'center');

    // Invoice details
    pdf.setFontSize(12);
    const invoiceNo = `Invoice No: ${formData.billNumber}`;
    const billNo = `Bill No: ${formData.billNumber}`;
    const date = `Date: ${formData.date}`;
    pdf.text(invoiceNo, 10, 90);
    pdf.text(billNo, 10, 100);
    pdf.text(date, 200, 90, null, null, 'right');

    // Table
    const tableData = formData.products.map((product) => [
      product.productName,
      product.quantity,
      product.price,
      product.total
    ]);
    const tableOptions = {
      startY: 120,
      head: [['Items', 'Quantity', 'Price', 'Amount']],
      body: tableData
    };
    pdf.autoTable(tableOptions);

    // Calculate and add Grand Total
    const grandTotal = calculateTotal();
    const lastY = pdf.previousAutoTable.finalY;
    pdf.text(`Grand Total: ${grandTotal}`, 10, lastY + 10);

    // Save PDF
    pdf.save("invoice.pdf");
  };

  return (
    <div className="h-screen w-full flex justify-start items-center">
      <div className='ml-0 h-screen'>
        {/* Your Menu Component */}
      </div>
      <div className="min-h-screen w-full flex justify-center bg-gray-100 items-center">
        <div className="container mx-auto mt-5 bg-white p-5 rounded-lg shadow-lg">
          <h1 className="text-2xl mb-4 text-center font-bold">Invoice</h1>
          <form id="invoiceForm" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="customerName" className="block text-gray-700 text-sm font-bold mb-2">Customer Name</label>
                <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="customerName" name="customerName" value={formData.customerName} onChange={(e) => setFormData({ ...formData, customerName: e.target.value })} />
              </div>
              <div>
                <label htmlFor="billNumber" className="block text-gray-700 text-sm font-bold mb-2">Bill Number</label>
                <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="billNumber" name="billNumber" value={formData.billNumber} readOnly onFocus={generateBillNumber} />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date</label>
              <input type="date" className="appearance-none border rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" name="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
            </div>
            <table className="table-auto w-full mb-4">
              <thead>
                <tr>
                  <th className="px-4 py-2">Items</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {formData.products.map((product, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2"><input type="text" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="productName" value={product.productName} onChange={(e) => handleInputChange(index, e)} /></td>
                    <td className="border px-4 py-2"><input type="text" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="description" value={product.description} onChange={(e) => handleInputChange(index, e)} /></td>
                    <td className="border px-4 py-2"><input type="number" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="price" value={product.price} onChange={(e) => handleInputChange(index, e)} /></td>
                    <td className="border px-4 py-2"><input type="number" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={product.total} readOnly /></td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3" className="text-right font-bold">Grand Total:</td>
                  <td className="border px-4 py-2"><input type="number" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={calculateTotal()} readOnly /></td>
                </tr>
              </tfoot>
            </table>
            <div className="mb-4">
              <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddRow}>Add Product</button>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">Submit</button>
              <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={generatePDF}>Print</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Invoice;

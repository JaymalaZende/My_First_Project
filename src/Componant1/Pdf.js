import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const generatePDF = (formData) => {
  const pdf = new jsPDF();

  // Logo (Replace 'logo.png' with the path to your image)
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
    product.description,
    product.price,
    product.amount
  ]);
  const tableOptions = {
    startY: 120,
    head: [['Items', 'Description', 'Price', 'Amount']],
    body: tableData
  };
  pdf.autoTable(tableOptions);

  // Save PDF
  pdf.save("invoice.pdf");
};

const Invoice = () => {
  const [formData, setFormData] = useState({
    billNumber: '123',
    date: '2024-03-01',
    products: [
      { productName: 'Product 1', description: 'Description 1', price: 10, amount: 20 },
      { productName: 'Product 2', description: 'Description 2', price: 15, amount: 15 },
      { productName: 'Product 3', description: 'Description 3', price: 8, amount: 24 }
    ]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF(formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl mb-4 text-center font-bold">Invoice</h1>
        <form onSubmit={handleSubmit}>
          {/* Your form inputs here */}
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">Generate PDF</button>
        </form>
      </div>
    </div>
  );
};

export default Invoice;

import React from "react";

const Add = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const img = e.target.img.value;

    const product = { name, price, img };

    console.log(product);

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Products Added Successfully");
        e.target.reset();
        console.log("Success:", data);
      });
  };
  return (
    <div>
      <section className="my-10">
        <h3 className="text-2xl text-blue-800 underline">Add Products</h3>
      </section>
      <section className="w-1/2 mx-auto text-left">
        <form onSubmit={handleOnSubmit}>
          <div className="mb-6">
            <label
              htmlFor="product-name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="product-name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product Name"
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="product-price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Price
            </label>
            <input
              type="number"
              id="product-price"
              name="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product Price"
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="product-image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Image Link
            </label>
            <input
              type="text"
              id="product-image"
              name="img"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product Image Link"
              required=""
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
        </form>
      </section>
    </div>
  );
};

export default Add;

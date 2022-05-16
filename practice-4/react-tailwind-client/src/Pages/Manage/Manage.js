import React from "react";
import useProducts from "../../hooks/useProducts";
import { TrashIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Manage = () => {
  const [products, setProducts] = useProducts();
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to delete?");
    if (confirm) {
      console.log(id);

      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
          alert("Delete Successful");
          console.log("Successfully Deleted:", data);
        });
    }
  };

  return (
    <div>
      <section className="my-10">
        <h3 className="text-2xl text-blue-800 underline">Manage Products</h3>
      </section>
      <section>
        <div>
          {products?.map((product) => (
            <div
              key={product._id}
              className="flex flex-row justify-center items-center border border-blue-700 w-fit mx-auto rounded-md p-4 my-5"
            >
              <img
                src={product.img}
                className="w-[50px] h-[50px] rounded-full"
                alt=""
              />
              <p className="mx-5 text-xl font-bold">{product.name}</p>
              <div className="flex flex-row justify-between items-center ml-5">
                <Link
                  to={`/update/${product._id}`}
                  type="button"
                  className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="mx-5"
                >
                  <TrashIcon className="w-6 text-red-700 hover:text-red-800"></TrashIcon>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Manage;

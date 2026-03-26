import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputErrors from "../components/InputErrors.jsx";
import InputField from "../components/InputField.jsx";
import axios from "axios";
import LoadingEffect from "../components/LoadingEffect";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSingleProduct,
  uploadProduct,
  updateProduct,
} from "../api/productApi.js";
import Wrapper from "../components/Wrapper.jsx";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();
  const fomrStatus = productId ? "Update Product" : "Add Product";
  useEffect(() => {
    const fetchSingleProductData = async () => {
      try {
        const res = await getSingleProduct(productId);
        const data = res.data.data;
        console.log(res);
        reset({
          name: data.name,
          price: data.price,
          image: data.image,
        });
        setProduct(data);
      } catch (error) {}
    };

    if (productId) {
      fetchSingleProductData();
    }
  }, []);
  const createProduct = async (data) => {
    setLoading(true);
    try {
      console.log(data);
      const response = await uploadProduct(data);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const editProduct = async (data) => {
    setLoading(true);
    try {
      console.log(data);
      const response = await updateProduct(productId, data);
      console.log("Updated Successfully");
      reset();
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      {/* display products header*/}
      <div className="flex flex-row items-center gap-x-1.5 justify-center">
        <h1 className="text-gray-600 text-3xl font-extrabold">
          {productId ? "Upadte Product" : "Create New Product"}
        </h1>
      </div>

      <div
        className={`relative mt-10  ${
          productId ? "bg-green-900" : "bg-blue-900"
        } rounded-md p-5 max-w-2xl mx-auto`}
      >
        <form
          onSubmit={handleSubmit(productId ? editProduct : createProduct)}
          className="space-y-3 text-white"
        >
          <div>
            <InputField
              labelFor={"name"}
              message={"Product Name is required"}
              type={"text"}
              placeholder={"Product Name"}
              register={register}
              errors={errors}
              value={product.name}
            />
            <InputErrors labelFor={"name"} errors={errors} />
          </div>
          <div>
            <InputField
              labelFor={"price"}
              message={"Product Price is required"}
              type={"text"}
              placeholder={"Product price"}
              register={register}
              errors={errors}
            />
            <InputErrors labelFor={"price"} errors={errors} />
          </div>
          <div>
            <InputField
              labelFor={"image"}
              message={"Product Image url is required"}
              type={"text"}
              placeholder={"Product Image Url"}
              register={register}
              errors={errors}
            />
            <InputErrors labelFor={"image"} errors={errors} />
          </div>

          <input
            type="submit"
            value={productId ? "Update Product" : "Add Product"}
            className={`w-full  ${
              productId ? "bg-green-400" : "bg-blue-400"
            } p-1.5 rounded-xs cursor-pointer`}
          />
        </form>
        {loading && <LoadingEffect text={productId ? "Updating" : "Adding"} />}
      </div>
    </Wrapper>
  );
};

export default CreateProduct;

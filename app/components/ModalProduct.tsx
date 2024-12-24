// import "react-slideshow-image/dist/styles.css";
import { Product } from "@/types";
import Image from "next/image";
import { calculateTimeDifference } from "@/lib/datedifference";
import { TbXboxX } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { changeModalParam } from "@/lib/features/dashboard/dasboard.slice";

interface props {
  product: Product;
}
const ModalProduct = ({ product }: props) => {
  // const slideImages = [images[0], images[1], images[2]];
  const modal = useAppSelector((state: RootState) => state.app.modal);
  
  const imagesaux = [
    "https://placeimg.com/640/480/any?r=0.9178516507833767",
    "https://placeimg.com/640/480/any?r=0.9300320592588625",
    
  ]
  const dispatch = useAppDispatch();
  return (
    <div
      key={product.id}
      className={
        modal
          ? " fixed max-w-[1290px] w-11/12 h-5/6 flex product-card top-16 left-24 bg-white rounded-lg shadow-md justify-between overlay-container"
          : "hidden"
      }
    >
      <span
        className="absolute top-1 right-1 "
        onClick={() => {
          dispatch(changeModalParam());
        }}
      >
        <TbXboxX color="gray" size={30} />
      </span>
      <Image
        height={638}
        width={700}
        src={product.category.image}
        alt={product.title}
        className="object-cover w-full h-full max-w-[500px] rounded-l-lg "
      />
       <div className=" f">
   <Image
        height={80}
        width={80}
        src={imagesaux[0]}
        alt={product.title}
        className="object-cover w-20 h-20 absolute bg-slate-200"
        loading="lazy"
        onClick={() => dispatch(changeModalParam())}
      />
           <Image
        height={80}
        width={80}
        src={imagesaux[0]}
        alt={product.title}
        className="object-cover w-20 h-20 absolute z-50 "
        loading="lazy"
        onClick={() => dispatch(changeModalParam())}
      />

           <Image
        height={80}
        width={80}
        src={imagesaux[0]}
        alt={product.title}
        className="object-cover w-20 h-20 absolute "
        loading="lazy"
        onClick={() => dispatch(changeModalParam())}
      />
   </div>
      <div className="p-4 w-full h-full ">
        <h2 className="text-3xl font-bold mb-3">{product.title}</h2>
        <p className="text-gray-700 text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ratione assumenda tenetur est praesentium cupiditate, dolorum iusto vero rem dolorem ipsum tempore delectus optio ipsam id esse dignissimos quo itaque.</p>
        <div className="flex flex-col justify-between items-start mt-4">
          <span className="text-gray-700 text-sm">
            Categoria: <strong>{product.category.name}</strong>
          </span>
          <span className="text-indigo-600 font-bold text-lg">
            Price: ${product.price}
          </span>
          <span>
            Publicado hace {calculateTimeDifference(product.creationAt)}
          </span>
        </div>

        <div className="flex justify-center bottom-0">
          <button className="mt-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;

import img1 from "../../../../assets/images/banner/1.jpg"
import img2 from "../../../../assets/images/banner/2.jpg"
import img3 from "../../../../assets/images/banner/3.jpg"
import img4 from "../../../../assets/images/banner/4.jpg"

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img1}
          className="w-full object-cover rounded-lg"
        />
        <div className="absolute left-0 top-0  flex  items-center h-full pl-9 bg-linear-to-r from-[#151515] to-blue-[rgba(21,21,21,0)] rounded-lg ">
          <div className=" text-white space-y-6">
            <h2 className="text-6xl font-bold  ">Affordable <br /> Price For Car <br /> Servicing</h2>
            <p>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
            <div className="flex gap-2">
                <button className=" btn bg-[#F33811] text-white ">Discover More</button>
                <button className="btn btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute  right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[600px]">
        <img
          src={img2}
          className="w-full object-cover rounded-lg"
        />
         <div className="absolute left-0 top-0  flex  items-center h-full pl-9 bg-linear-to-r from-[#151515] to-blue-[rgba(21,21,21,0)] rounded-lg ">
          <div className=" text-white space-y-6">
            <h2 className="text-6xl font-bold  ">Affordable <br /> Price For Car <br /> Servicing</h2>
            <p>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
            <div className="flex gap-2">
                <button className=" btn bg-[#F33811] text-white ">Discover More</button>
                <button className="btn btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute  right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide1" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[600px]">
        <img
          src={img3}
          className="w-full object-cover rounded-lg"
        />
         <div className="absolute left-0 top-0  flex  items-center h-full pl-9 bg-linear-to-r from-[#151515] to-blue-[rgba(21,21,21,0)] rounded-lg ">
          <div className=" text-white space-y-6">
            <h2 className="text-6xl font-bold  ">Affordable <br /> Price For Car <br /> Servicing</h2>
            <p>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
            <div className="flex gap-2">
                <button className=" btn bg-[#F33811] text-white ">Discover More</button>
                <button className="btn btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute  right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide2" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[600px]">
        <img
          src={img4}
          className="w-full object-cover rounded-lg"
        />
         <div className="absolute left-0 top-0  flex  items-center h-full pl-9 bg-linear-to-r from-[#151515] to-blue-[rgba(21,21,21,0)] rounded-lg ">
          <div className=" text-white space-y-6">
            <h2 className="text-6xl font-bold  ">Affordable <br /> Price For Car <br /> Servicing</h2>
            <p>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
            <div className="flex gap-2">
                <button className=" btn bg-[#F33811] text-white ">Discover More</button>
                <button className="btn btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute  right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide3" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

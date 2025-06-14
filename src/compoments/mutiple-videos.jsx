import talk_person from "../assets/videos/talk_persons.mp4";
export default function VideoGallery() {


  return (
    <div className="">
      <div className="flex gap-4 px-4 overflow-x-auto">
        <video className="h-[1000px] w-[1000px]" src="../assets/videos/talk_persons.mp4" type="video/mp4"></video>
      </div>
    </div>
  );
}
 //<h1 className='font-bold text-4xl text-white pt-10'>Confira alguns depoimentos</h1>
    //      <VideoGallery />
import Image from "next/image";

function page() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="text-7xl text-center m-10 font-bold">About Us</div>
      <div className="p-10">
        <div className="text-2xl font-semibold ">Our Origin Story:</div>
        <div className="mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </div>
      </div>

      <div className="p-10 flex flex-col">
        <div className="text-2xl font-semibold mb-5">Special Thanks to</div>
        <div>Mohit Sir (Faculty Coordinator)</div>
        <div>Rahul Nayak (Ex-President)</div>
        <div>Pisapati Tejoram (Ex-President)</div>
      </div>
    </div>
  );
}

export default page;

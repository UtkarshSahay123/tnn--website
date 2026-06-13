function page() {
  return (
    <div className="flex flex-col gap-10">
      <div className="text-7xl text-center m-10 font-bold">Contact Us</div>
      <div>
        {/* <p>Register your Interest:</p> */}
      </div>
      <div>

      <font size = "5">
        <p><b>Social Media Handles :</b><br></br></p>
      </font>

      <br></br>

        
        <div>
          <a href ='https://www.linkedin.com/company/team-next-nexus-vit-ap/posts/?feedView=all'>
          <img src = '/sample/linkedin.png' alt = 'LinkedIn' className="w-10 h-10 inline-block mr-2"/>
          </a>
          <a href = 'https://www.linkedin.com/company/team-next-nexus-vit-ap/posts/?feedView=all'>LinkedIn</a>
        </div>
        

        <br></br>


        <div>
          <a href ='mailto:nextnexus.club@vitap.ac.in'>
          <img src = '/sample/gmail.png' alt = 'Gmail' className="w-10 h-10 inline-block mr-2"/>
          </a>
          <a href = 'mailto:nextnexus.club@vitap.ac.in'>Gmail</a>
        </div>


        <br></br>


        <a href = 'https://www.instagram.com/tnn_vitap/'>
        <div>
          <img src = '/sample/instagram.png' alt = 'Instagram' className="w-10 h-10 inline-block mr-2"/>
          Instagram
        </div>
        </a>
        <br></br>   
      </div>
    </div>
  );
}

export default page;

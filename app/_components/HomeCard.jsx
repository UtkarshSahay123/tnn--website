import Link from "next/link";

function HomeCard() {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">Team Name</h2>
        <p>Short Description</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" href={`/teams/${name}`}>
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;

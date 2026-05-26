import Link from "next/link";
import { capitalize } from "../_helper/capitalize";

function MemberCard({ id, name, position, team }) {
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{capitalize(name)}</h2>
        <p>{capitalize(position)}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" href={`${team}/${id}`}>
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;

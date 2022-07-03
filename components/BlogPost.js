import Link from "next/link";

function PostCard({title, date, description, slug }) {
  return (
        <div className="my-4 py-4">
            <div className="font-regular text-lg">{date}</div>
            <div className="font-semibold text-xl pb-1">{title}</div>
            <div className="font-regular text-md italic pb-3">{description}</div>
            <Link href="blog/[slug]" as={`blog/${slug}`}>
                <button className="btn btn-primary btn-sm">read more</button>
            </Link>
        </div>
  );
}

export default PostCard;
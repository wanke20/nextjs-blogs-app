import Comments from "@/components/Comments";
import FormComment from "@/components/FormComment";


const BlogDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold">Post one</h1>
      <p>Written by: john doe</p>
      <div className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos
        blanditiis atque tempore, unde aperiam nemo. Dignissimos fuga, odit ipsa
        sed cum tempora laborum, inventore voluptates, quis amet consectetur
        maiores!
      </div>

      <Comments />
      <FormComment />
    </div>
  );
};

export default BlogDetailPage;

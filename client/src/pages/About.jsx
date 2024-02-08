export default function About() {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='max-w-2xl mx-auto p-3 text-center'>
          <div>
            <h1 className='text-3xl font font-semibold text-center my-7'>
              About Aaryan's Blog
            </h1>
            <div className='text-md text-gray-500 flex flex-col gap-6'>
              <p>
              Welcome to Aaryan's Blog , the go-to resource crafted with the MERN stack to inspire and educate web development enthusiasts. Our platform merges MongoDB, Express.js, React, and Node.js insights with practical tutorials, empowering your coding journey. We're dedicated to making web development accessible and engaging, ensuring every visit enhances your skills and knowledge.
              </p>
  
              <p>
                On this blog, you'll find weekly articles and tutorials on topics
                such as web development, software engineering, and programming
                languages. Aaryan is always learning and exploring new
                technologies, so be sure to check back often for new content!
              </p>
  
              <p>
                We encourage you to leave comments on our posts and engage with
                other readers. You can like other people's comments and reply to
                them as well. We believe that a community of learners can help
                each other grow and improve.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
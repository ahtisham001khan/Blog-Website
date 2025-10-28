import { Col, Container, Row } from "react-bootstrap";
import { Catagory_Sidebar } from "./Catagory_Sidebar";
import Header from "./Header";
import { Heading } from './Heading'
import { Posts } from "./Posts";
import { Subscription } from "./Subscription";
import { Card_Slider } from "./Card_Slider";
import Search_Bar from "./Search_Bar";

const Home = () => {
  return (
    <>


 <Container>
<Header />
</ Container>
<Container >
<Heading  heading="Latest News"/>
<Card_Slider />  
</Container>
<Container>
<Row>
<Col lg={8} md={12} className="d-block">
<Posts />
</Col>
<Col lg={4} md={12} className="d-lg-block d-none">
<Catagory_Sidebar/>
</Col>
</Row>
</ Container>
<Subscription />
    </>
  )
}

export default Home;



/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Blog Search Bar</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center">
  <div class="w-full max-w-xl px-4">
    <h1 class="text-3xl font-bold mb-6 text-center">Search Blog Posts</h1>
    
    <!-- Search Input -->
    <div class="relative">
      <input
        type="text"
        id="searchInput"
        placeholder="Type to search articles..."
        class="w-full pl-10 pr-4 py-2 rounded-lg shadow-sm border focus:ring-blue-500 focus:border-blue-500"
      />
      <svg class="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>

    <!-- Suggestions -->
    <ul id="suggestions" class="mt-2 bg-white border rounded-md shadow hidden"></ul>
  </div>

  <script>
    const posts = [
      "How to Start Freelancing in 2025",
      "10 JavaScript Tricks for Beginners",
      "Exploring the Future of AI",
      "Top Places to Visit in Pakistan",
      "Boost Your Productivity with These Tips",
      "Learning React for Web Development",
      "Building Your First Portfolio Website"
    ];

    const input = document.getElementById("searchInput");
    const suggestions = document.getElementById("suggestions");

    input.addEventListener("input", () => {
      const value = input.value.toLowerCase();
      suggestions.innerHTML = '';

      if (value) {
        const filtered = posts.filter(post => post.toLowerCase().includes(value));

        if (filtered.length === 0) {
          suggestions.innerHTML = '<li class="p-2 text-gray-500">No results found</li>';
        } else {
          filtered.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            li.className = "p-2 hover:bg-gray-100 cursor-pointer";
            suggestions.appendChild(li);
          });
        }

        suggestions.classList.remove("hidden");
      } else {
        suggestions.classList.add("hidden");
      }
    });

    // Optional: Hide suggestions when clicked outside
    document.addEventListener("click", (e) => {
      if (!document.querySelector(".relative").contains(e.target)) {
        suggestions.classList.add("hidden");
      }
    });
  </script>
</body>
</html>



*/ 

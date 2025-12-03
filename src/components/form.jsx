import { useState } from "react";

export default function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("")
    setDescription("")
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        placeholder="Enter title for the blog"
        required
        value={title}
        onChange={(e)=>{ setTitle(e.target.value) }}
      />
      <label htmlFor="desc">Description</label>
      <textarea
        id="desc"
        type="text"
        placeholder="Enter description for the blog"
        required
        value={description}
        onChange={(e)=>{setDescription(e.target.value)}}
        cols="20"
        rows="3"
      />
      <button>Create Blog</button>
    </form>
  );
}

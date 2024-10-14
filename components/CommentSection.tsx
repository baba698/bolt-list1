"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function CommentSection({ articleId }: { articleId: string }) {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="mb-2"
        />
        <Button type="submit">Post Comment</Button>
      </form>
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="bg-secondary p-4 rounded">
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
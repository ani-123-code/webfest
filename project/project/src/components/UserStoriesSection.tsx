import { userStories } from '../data/userStories';
import UserStoryCard from './UserStoryCard';

export default function UserStoriesSection() {
  return (
    <div className="py-24 bg-gradient-to-br from-white via-green-50 to-emerald-50 relative overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
           <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-green-950 mb-2 relative">
                Success
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent"> Stories</span>
              </h1>
              <div className="h-1 w-40 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600">
            Real stories from our customers who are making a difference
          </p>
        </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 min-[1350px]:grid-cols-3 gap-8">
  {userStories.map((story) => (
    <UserStoryCard key={story.id} story={story} />
  ))}
</div>
      </div>
    </div>
  );
}
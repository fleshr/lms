import { cn } from "@/shared/lib/utils";
import { Star } from "lucide-react";

const ratings = [1, 2, 3, 4, 5];

interface RatingProps {
  rating: number;
}

export const Rating = (props: RatingProps) => {
  const { rating } = props;
  const currentRatings = Math.max(0, Math.min(Math.floor(rating), 10));

  return (
    <div className="flex gap-1">
      {ratings.map((rating) => (
        <Star
          key={rating}
          size={16}
          className={cn({
            "stroke-ring": rating > currentRatings,
            "fill-yellow-400 stroke-yellow-400": rating <= currentRatings,
          })}
        />
      ))}
    </div>
  );
};

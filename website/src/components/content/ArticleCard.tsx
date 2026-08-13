import React from 'react';
import Link from 'next/link';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { Post } from '@/lib/mdx';

export const ArticleCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card className="h-full flex flex-col justify-between p-7 space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" size="sm">
              {post.category}
            </Badge>
            <span className="text-xs text-[#66615C] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h3 className="text-xl font-bold text-[#2D2A26] group-hover:text-[#436444] transition-colors leading-snug">
            {post.title}
          </h3>

          <p className="text-[#66615C] text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-4 border-t border-[#e6e2dc] space-y-2">
          {post.reviewer && (
            <div className="flex items-center gap-1.5 text-xs text-[#2e4e30] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0" />
              <span>Reviewed by {post.reviewer}</span>
            </div>
          )}

          <div className="flex items-center gap-2 text-xs font-bold text-[#436444] group-hover:translate-x-1 transition-transform">
            <span>Read Full Article</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Card>
    </Link>
  );
};

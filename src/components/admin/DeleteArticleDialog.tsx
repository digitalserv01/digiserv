
'use client';
import { useEffect, useRef, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import type { Article } from '@/types/article';
import { deleteArticle } from '@/app/(main)/test/actions';
import { Loader2 } from 'lucide-react';

interface DeleteArticleDialogProps {
  article: Article;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onDeleteSuccess: () => void;
}

function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <AlertDialogAction type="submit" disabled={pending} className="bg-destructive hover:bg-destructive/90">
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Delete
    </AlertDialogAction>
  );
}

export default function DeleteArticleDialog({ article, isOpen, setIsOpen, onDeleteSuccess }: DeleteArticleDialogProps) {
  const [state, formAction] = useActionState(deleteArticle, { error: undefined, message: undefined });
  const { toast } = useToast();
  
  useEffect(() => {
    if (state?.message) {
      toast({ title: 'Success', description: state.message });
      onDeleteSuccess();
    }
    if (state?.error) {
      toast({ title: 'Error', description: state.error, variant: 'destructive' });
    }
  }, [state, toast, onDeleteSuccess]);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the article "{article.title}" from the database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form action={formAction}>
           <input type="hidden" name="articleId" value={article.id} />
           <input type="hidden" name="articleSlug" value={article.slug} />
           <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <DeleteButton />
            </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

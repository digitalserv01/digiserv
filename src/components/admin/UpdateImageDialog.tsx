
'use client';
import { useEffect, useRef, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import type { Article } from '@/types/article';
import { updateArticleImage } from '@/app/(main)/test/actions';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';

interface UpdateImageDialogProps {
  article: Article;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onUpdateSuccess: () => void;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Save Image
    </Button>
  );
}

export default function UpdateImageDialog({ article, isOpen, setIsOpen, onUpdateSuccess }: UpdateImageDialogProps) {
  const [state, formAction] = useActionState(updateArticleImage, { error: undefined, message: undefined });
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.message) {
      toast({ title: 'Success', description: state.message });
      onUpdateSuccess();
    }
    if (state?.error) {
      toast({ title: 'Error', description: state.error, variant: 'destructive' });
    }
  }, [state, toast, onUpdateSuccess]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Hero Image</DialogTitle>
          <DialogDescription>
            Update the image for the article: "{article.title}"
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} action={formAction} className="space-y-4">
          <input type="hidden" name="articleId" value={article.id} />
          
          <div>
            <Label htmlFor="imageUrl">New Image URL</Label>
            <Input id="imageUrl" name="imageUrl" defaultValue={article.imageUrl} />
            {state?.error && <p className="text-sm text-destructive mt-1">{state.error}</p>}
          </div>

          <div>
            <Label>Current Image Preview</Label>
            <div className="mt-2 relative aspect-video w-full rounded-md overflow-hidden border">
                <Image src={article.imageUrl || 'https://placehold.co/1200x600.png'} alt="Current article image" fill className="object-cover" />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
            <SubmitButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

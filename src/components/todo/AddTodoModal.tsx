import { FormEvent, useState } from 'react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
 
 
 
import { useAddTodosMutation } from '@/redux/api/api';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
 
const AddTodoModal = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  console.log(priority);

  // const dispatch = useAppDispatch();

  const [addTodo, {isLoading, isError, isSuccess}]= useAddTodosMutation();

  // console.log(addTodo(),{isLoading, isError,isSuccess});
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
 

    const taskDetails = {
 
      title: task,
      isCompleted:false,
      description,
      priority
    };

    console.log(taskDetails,'modal');
   addTodo(taskDetails)
    // dispatch(addTodo(taskDetails))
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold">
          Add todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
          <DialogDescription>
            Add your tasks that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Priority
              </Label>
              <Select onValueChange={(value) => setPriority(value)}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="select priority" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="high">High</SelectItem>
    <SelectItem value="medium">Medium</SelectItem>
    <SelectItem value="low">Low</SelectItem>
  </SelectContent>
</Select>
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
 
export default AddTodoModal;



 
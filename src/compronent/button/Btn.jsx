import {Button, cn} from "@nextui-org/react";

 function Btn({className,title,icon}) {
  return (

     <Button color="primary" variant="shadow" className={cn('bg-red-500 p-8',className)}>
        {title}
      </Button>  
   
  );
}
export default Btn;
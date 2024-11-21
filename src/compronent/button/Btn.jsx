import {Button, cn} from "@nextui-org/react";

 function Btn({className,title,icon}) {
  return (

     <Button color="primary" variant="shadow" className={cn(' bg-primary w-[195px] h-[56px] rounded-full text-white ',className)}>
        {title }
        {icon}
      </Button>  
   
  );
}
export default Btn;
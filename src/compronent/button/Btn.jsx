import {Button, cn} from "@nextui-org/react";

 function Btn({className,title,icon}) {
  return (

     <Button color="primary" variant="shadow" className={cn(' bg-primary w-[110px] h-[35px] sm:w-[120px] sm:h-[40px]  lg:w-[195px] lg:h-[56px] rounded-full text-white font-medium text-[16px] ',className)}>
        {title }
        {icon}
      </Button>  
   
  );
}
export default Btn;
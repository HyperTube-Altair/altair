import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

export default function Comment() {
  return (
    <div className="w-[80%] h-fit">
      <Card className="w-full">
        <CardHeader className="flex flex-row gap-[10px] font-bold">
          <Avatar
            src="https://i.pravatar.cc/300"
            className="w-[48px] h-[48px]"
          ></Avatar>
          Houssam-eddine Moumanis
        </CardHeader>
        <CardBody>Yaaah wlh ila Driss wtf!!</CardBody>
      </Card>
    </div>
  );
}

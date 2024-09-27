import Image from "next/image";
import Link from "next/link";

const Page = ({ params }: { params: { id: string[] } }) => {
  const user = {
    uid: "1",
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123-456-7890",
    trainer_id: 123,
    trainer_name: "Jane Smith",
    image:
      "https://movementfitnesshk.com/wp-content/uploads/2024/07/Gina-Lai.png",
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-8 bg-white text-black w-full">
      <div className="text-center mt-4 flex flex-col gap-8 w-full">
        <div className="flex flex-row gap-2">
          <Image
            src={user.image}
            height={60}
            width={60}
            alt={`${user.name} image`}
            objectFit="cover"
            className="rounded-full aspect-square object-cover"
          />
          <div className="flex flex-col items-start">
            <h2 className="text-l font-bold">{user.name}</h2>
            <p className="text-sm">{user.email}</p>
            <p className="text-sm">{user.phone}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-stretch">
          <LinkTile
            href={`${user.uid}/goals`}
            label="Personal Goals"
            stat="Completed 9/15"
          />
          <LinkTile
            href={`${user.uid}/body-mass-composition`}
            label="Body Mass Composition"
            stat="24 Entries"
          />
          <LinkTile
            href={`${user.uid}/training-plan`}
            label="Training Plan"
            stat="4 Phases / 18 Sessions"
          />
          <LinkTile
            href={`${user.uid}/workouts`}
            label="Workout History"
            stat="76 Entries"
          />
          <LinkTile href={`/workout/new`} label="Track New Workout" stat="" />
        </div>
      </div>
    </main>
  );
};

const LinkTile = ({
  href,
  label,
  stat,
}: {
  href: string;
  label: string;
  stat: string;
}) => {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center gap-2 p-4 bg-white border-2 rounded-xl border-primary">
        <p className="font-bold">{label}</p>
        <p className="text-sm">{stat}</p>
      </div>
    </Link>
  );
};

export default Page;

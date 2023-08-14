import Link from "next/link";

export default function page({ params }: any) {
  return (
    <div>
      This about id : {params.id}
      <div>
        <Link href={"../"} replace={true}>
          หน้าแรก
        </Link>
      </div>
      ;
    </div>
  );
}

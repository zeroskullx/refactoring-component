import { useText } from "hook/useTest";
import Link from "next/link";
import { useRouter } from "next/router";

function Component() {
  const { getText } = useText();

  const router = useRouter();
  const { slug } = router.query ? router.query : { slug: "" };

  const value = slug?.toString().toLowerCase();

  return (
    <div className="cover-container">
      <main>
        {value === "x" && <div className={"box-x"}>{getText("X")}</div>}

        {value === "y" && <div className={"box-y"}>{getText("Y")}</div>}

        {value === "z" && <div className={"box-z"}>{getText("Z")}</div>}
      </main>

      <footer>
        <Link href={"/refactoring/x"}>
          <a>Box X</a>
        </Link>

        <Link href={"/refactoring/y"}>
          <a>Box Y</a>
        </Link>

        <Link href={"/refactoring/z"}>
          <a>Box Z</a>
        </Link>
      </footer>
    </div>
  );
}

export default Component;

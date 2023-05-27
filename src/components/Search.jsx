import { useState, useEffect } from "react";
import AngkotCard from "./AngkotCard";
import SearchOne from "./SearchOne";
import SearchTwo from "./SearchTwo";

function Search(props) {
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const [angkots, setAngkot] = useState([]);

  const [tab, setTab] = useState("1");
  const aktif =
    "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500";
  const nonAktif =
    "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300";

  const allAngkot = async (token) => {
    const headers = { Authorization: "Bearer " + token };
    const response = await fetch(`http://localhost:8000/api/angkot`, {
      headers,
    });
    const data = await response.json();
    setAngkot(data.data);
  };

  useEffect(() => {
    allAngkot(props.getToken());
  }, []);

  useEffect(() => {
    setSearch1("");
    setSearch2("");
  }, [tab]);

  const hasil1 = angkots.filter(
    (angkot) =>
      angkot.no.includes(search1) ||
      angkot.rute.some((rute) =>
        rute.nama_jalan.toLowerCase().includes(search1.toLowerCase())
      )
  );

  const hasil2 = angkots.filter((angkot) => {
    const check1 =
      angkot.no.includes(search1) ||
      angkot.rute.some((rute) =>
        rute.nama_jalan.toLowerCase().includes(search1.toLowerCase())
      );
    const check2 =
      angkot.no.includes(search2) ||
      angkot.rute.some((rute) =>
        rute.nama_jalan.toLowerCase().includes(search2.toLowerCase())
      );
    if (check1 && check2) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className="pb-28 mx-auto mt-6">
      <div className="py-8 px-6 mx-auto max-w-3xl">
        <div className="mx-auto max-w-screen-sm text-center mb-8">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Daftar Angkot Medan
          </h2>
        </div>

        <div className="my-8">
          <ul className="flex flex-wrap justify-evenly  text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li className="mr-2">
              <span
                className={tab == 1 ? aktif : nonAktif}
                onClick={() => setTab(1)}
              >
                Nomor Angkot atau Nama Jalan
              </span>
            </li>
            <li className="mr-2">
              <span
                className={tab == 2 ? aktif : nonAktif}
                onClick={() => setTab(2)}
              >
                Dua Nama Jalan
              </span>
            </li>
          </ul>
        </div>

        {tab == 1 && <SearchOne search1={search1} setSearch1={setSearch1} />}
        {tab == 2 && (
          <SearchTwo
            search1={search1}
            setSearch1={setSearch1}
            search2={search2}
            setSearch2={setSearch2}
          />
        )}
      </div>
      {tab == 1 ? (
        <div className="mt-2 mx-auto w-11/12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {hasil1.length > 0 &&
            hasil1.map((angkot) => (
              <AngkotCard key={self.crypto.randomUUID()} angkot={angkot} />
            ))}
        </div>
      ) : (
        <div className="mt-2 mx-auto w-11/12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {hasil2.length > 0 &&
            hasil2.map((angkot) => (
              <AngkotCard key={self.crypto.randomUUID()} angkot={angkot} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Search;

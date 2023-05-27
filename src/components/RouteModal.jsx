import React from "react";

function numberWithPoint(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function RouteModal(props) {
  return (
    <div>
      <div
        id="readProductModal"
        tabIndex={-1}
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
      >
        <div className="relative p-4 w-full max-w-xl h-full md:h-auto">
          {/* Modal content */}
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* Modal header */}
            <div className="flex justify-between mb-4 rounded-t sm:mb-5">
              <div className="text-lg text-gray-900 md:text-xl dark:text-white">
                <h3 className="font-semibold ">
                  Angkot {props.angkot.no}{" "}
                  <span className="inline mb-2 font-normal text-lg tracking-tight text-gray-900/50 dark:text-white/50">
                    {" "}
                    ({props.angkot.warna})
                  </span>
                </h3>
                <p className="font-normal">{props.angkot.nama_angkot}</p>
              </div>
              <div>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="readProductModal"
                  onClick={props.handleOnClick}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
            </div>
            <div>
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                {props.angkot.rute.length > 0 &&
                  props.angkot.rute.map((rute) => (
                    <li key={self.crypto.randomUUID()} className="mb-6 ml-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                      {/* <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{ rute.urutan }</time> */}
                      <h3 className="text-normal font-semibold text-gray-900 dark:text-white">
                        {rute.urutan}. {rute.nama_jalan}
                        <span className="inline mb-2 font-normal text-normal tracking-tight text-gray-900/50 dark:text-white/50">
                          {" "}
                          - {rute.km} KM
                        </span>
                      </h3>
                      <p className="text-base font-sm text-gray-500 dark:text-gray-400">
                        Rp. {numberWithPoint(rute.harga)}
                      </p>
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RouteModal;

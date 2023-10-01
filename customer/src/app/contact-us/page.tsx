import Button from '@/components/layouts/Button';

export default function ContactUsPage(): JSX.Element {
  return (
    <>
      <div className="h-[550px] bg-[url('/assets/images/bg-5.jpg')] bg-fixed w-full bg-no-repeat">
        <div className="w-full h-full backdrop-brightness-50">
          <div className="flex justify-center items-center h-full">
            <p className="text-white text-6xl font-bold">Contact Us</p>
          </div>
        </div>
      </div>
      <div className="p-20 bg-[#f5f7f9] flex flex-col gap-y-24">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-2xl">Have any queries?</p>
          <p className="text-4xl font-bold">We're here to help.​</p>
          <div className="border w-20 h-0.5 rounded-lg border-black bg-black" />
          <div>
            <div className="w-[20rem] flex flex-col justify-center items-center gap-4 p-8 rounded-lg shadow-2xl bg-white">
              <p className="font-black text-xl">Sales</p>
              <p className="text-center">Vestibulum ante ipsum primis in faucibus orci luctus.</p>
              <p className="text-blue-500 text-xl font-bold">1800 123 4567</p>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center w-[85rem] mx-auto gap-x-8">
          <div className="flex flex-col text-start gap-y-4 w-[95rem]">
            <div>
              <p className="text-xl font-bold">Don't be a stranger!</p>
              <p className="text-4xl font-bold">You tell us. We listen.</p>
            </div>
            <p className="text-start">
              Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl, eu condimentum sem. Proin dignissim
              libero lacus, ut eleifend magna vehicula et. Nam mattis est sed tellus.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-12 gap-12 w-[85rem]">
            <form method="post" className="w-full flex flex-col gap-y-6">
              <input
                className="mt-1 px-3 p-4 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Name"
              />
              <input
                className="mt-1 px-3 p-4 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Subject"
              />
              <input
                type="email"
                className="mt-1 px-3 p-4 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Email"
              />
              <textarea
                className="resize mt-1 px-3 p-4 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Message"
                rows={5}
              ></textarea>
              <div>
                <Button bg color="bg-blue-500" submit>
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

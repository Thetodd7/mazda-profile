import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Info = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="info" className="info py-40">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-center w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-white">General Information</span>
            <div className="flex md:justify-center my-8">
              <LineGradient />
            </div>
          </p>
        </div>
      </motion.div>

      {/* FORM 1 */}
      <div className="md:flex md:justify-center gap-16 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex justify-center"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            enctype="multipart/form-data"
            action="https://formsubmit.co/19b8b67f24a29e48b051dec6ad6bb95b"
            method="POST"
          >
            <input
              className="w-full bg-gradient-to-r from-slate-400 to-slate-300 placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full bg-gradient-to-r from-slate-400 to-slate-300 placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
            <input
              className="w-full bg-gradient-to-r from-slate-400 to-slate-300 placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="PHONE"
              rows="4"
              cols="50"
              {...register("phone", {
                required: true,
                pattern: /^[0-9]+$/,
              })}
            />
            {errors.phone && (
              <p className="text-red mt-1">
                {errors.phone.type === "required" && "This field is required."}
                {errors.phone.type === "pattern" && "Invalid phone number."}
              </p>
            )}
            {/* FORM 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex justify-center w-full"
            >
              <div>
                <p className="font-playfair font-semibold text-4xl my-10">
                  <span className="text-white">Car Information</span>
                  <div className="flex md:justify-center my-5">
                    <LineGradient />
                  </div>
                </p>

                {/* <div className="flex md:justify-center my-5">
                  <LineGradient  />
                </div> */}
              </div>
            </motion.div>
            <input
              className="w-full bg-gradient-to-r from-slate-400 to-slate-300 font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="YEAR"
              {...register("year", {
                required: true,
                pattern: /^(199\d|200\d|2023)$/,
              })}
            />
            {errors.year && (
              <p className="text-red mt-1">
                {errors.year.type === "required" && "This field is required."}
                {errors.year.type === "pattern" && "Invalid Year."}
              </p>
            )}

            <input
              className="w-full bg-gradient-to-r from-slate-400 to-slate-300 font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="MAKE"
              {...register("make", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.make && (
              <p className="text-red mt-1">
                {errors.make.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
            <input
              className="w-full bg-gradient-to-r from-slate-400 to-slate-300 font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="MODEL"
              {...register("model", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.model && (
              <p className="text-red mt-1">
                {errors.model.type === "required" && "This field is required."}
                {errors.model.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
            <input
              className="w-full bg-gradient-to-r from-slate-400 to-slate-300 font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="VIN NUMBER (Optional)"
              {...register("vin number", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.vin_number && (
              <p className="text-red mt-1">
                {errors.vin_number.type === "required" &&
                  "This field is required."}
                {errors.vin_number.type === "maxLength" &&
                  "Max length is 100 char."}
              </p>
            )}
            <input
              className="w-full bg-gradient-to-r from-slate-400 to-slate-300 font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="Mileage"
              {...register("mileage", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.mileage && (
              <p className="text-red mt-1">
                {errors.mileage.type === "required" &&
                  "This field is required."}
                {errors.mileage.type === "maxLength" &&
                  "Max length is 100 char."}
              </p>
            )}

            <textarea
              className="w-full bg-gradient-to-r from-slate-400 to-slate-300 font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="Additional Information/Photos "
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
            <input
              type="file"
              name="attachment"
              accept="images/png, images/jpeg"
            ></input>
            <button
              className="flex items-center justify-between mx-auto  p-2 bg-gradient-to-r from-slate-300 to-slate-500 font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
              type="submit"
            >
              Get Offer
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Info;

import { PrismaClient } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { TextArea } from "./components/TextArea";

type Props = {};
type Data = {
  id?: string;
  title: string;
  description: string;
};
const FormSection = (props: Props) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [idString, setIdString] = useState<any>("");
  const [description, setDescription] = useState("");

  const [touched, setTouched] = useState<any>([]);
  const [content, setContent] = useState<any>({
    id: "",
    description: "",
  });
  const touch = (id: any) => {
    if (touched.indexOf(id) === -1) setTouched([...touched, id]);
  };
  const item = [
    {
      idString: idString,
      description: description,
    },
  ];

  const get = async () => {
    const res = await axios.get("/api/content");

    setData(res.data);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.put("/api/content", [content]);
      if (response.status === 200) {
        toast.success("Content update");
        return;
      }
    } catch (e) {
      toast("Data is same");
    }
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      <h6>content</h6>
      <form onSubmit={(e) => handleSubmit(e)}>
        {data.map((item: Data, index) => {
          return (
            <>
              <TextArea
                key={index}
                onChange={(e) => {
                  setContent({
                    id: item.id,
                    description: e.target.value,
                  });
                }}
                defaultValue={item.description}
              />
              <br />
            </>
          );
        })}
        <button type="submit">update</button>
      </form>

      {/* {data.map((item: Data, index: any) => {
        return (
          <>
            <TextArea
              name=""
              id=""
              cols={100}
              rows={2}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              defaultValue={item.description}
            ></TextArea>
          </>
        );
      })} */}
    </div>
  );
};

export default FormSection;

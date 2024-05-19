import {Editor} from "@tinymce/tinymce-react";
import { useId, useRef } from "react";
import { Controller } from "react-hook-form";

function RealTimeEditor({name,control,label,defaultValue=""}){
  let id=useId();
    return (
        <div className="w-full">
          {label && <label htmlFor={id}>{label}</label>}
          <Controller
            name={name || "content"}
            control={control}
            render={({field:{onChange}})=>(
                      <Editor
                        apiKey='7ra77zf9qbpdbrklfylosj9047ransumb2f622t9vwgy5gx3'
                        id={id}
                        initialValue={defaultValue}
                        init={{
                          height: 500,
                          menubar: false,
                          content_css:"document",
                          plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                          ],
                          toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                          }}
                          onEditorChange={onChange}
                      ></Editor>
                    )}
          ></Controller>
        </div>
        );
}

export default RealTimeEditor;
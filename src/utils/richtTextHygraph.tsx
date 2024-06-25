import { ComponentProps } from "react";
import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer";

type RichTextProps = ComponentProps<typeof CMSRichText>


export function RichTextHygraph({...props}: RichTextProps) {
    return <CMSRichText{...props}/>
}
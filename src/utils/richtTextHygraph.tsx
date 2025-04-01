import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer";
import { RichTextContent } from "@graphcms/rich-text-types";

interface RichTextHygraphProps {
    content: RichTextContent;
}

export function RichTextHygraph({ content }: RichTextHygraphProps) {
    return (
        <CMSRichText content={content} />
    );
}

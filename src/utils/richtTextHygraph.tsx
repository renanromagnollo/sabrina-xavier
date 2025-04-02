import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer";
import { RichTextContent } from "@graphcms/rich-text-types";

interface RichTextHygraphProps {
    content: RichTextContent;
}

export function RichTextHygraph({ content }: RichTextHygraphProps) {
    return (
        <CMSRichText
            content={content}
            renderers={{
                p: ({ children }) => <p style={{ marginBottom: "2vh" }}>{children}</p>,
                h1: ({ children }) => <h1 style={{ marginTop: "3vh" }}>{children}</h1>,
                h2: ({ children }) => <h2 style={{ marginTop: "3vh" }}>{children}</h2>,
                h3: ({ children }) => <h3 style={{ marginTop: "3vh" }}>{children}</h3>,
                h4: ({ children }) => <h4 style={{ marginTop: "3vh" }}>{children}</h4>,
                h5: ({ children }) => <h5 style={{ marginTop: "3vh" }}>{children}</h5>,
                h6: ({ children }) => <h6 style={{ marginTop: "3vh" }}>{children}</h6>,
            }}

        />
    );
}

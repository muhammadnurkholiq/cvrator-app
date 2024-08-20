import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font
} from "@react-pdf/renderer";
import { UserData } from "@/app/types/user-data"; // Adjust import based on your path

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf"
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-italic.ttf",
      fontStyle: "italic"
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
      fontWeight: 600
    }
  ]
});

interface ResumeTemplate1PDFProps {
  dataUser: UserData;
}

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    padding: 24,
    backgroundColor: "#fff",
    fontFamily: "Open Sans"
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: 7
  },
  rowGap10: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: 5
  },
  rowGap5: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: 5
  },
  rowGap5Wrap: {
    display: "flex",
    flexDirection: "row",
    gap: 5
  },
  rowGap5WrapLeft: {
    width: "15%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5
  },
  rowGap5WrapRight: {
    width: "85%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    textAlign: "justify",
    gap: 4
  },
  rowNoGapJustifySpaceBetween: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title1: {
    fontSize: 24,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  title2: {
    fontSize: 11,
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  text: {
    fontSize: 11,
    textAlign: "justify",
    lineHeight: "1.5px"
  },
  textItem: {
    fontSize: 10,
    textAlign: "justify",
    lineHeight: "1.5px"
  },
  textItalic: {
    fontSize: 11,
    textAlign: "justify",
    lineHeight: "1.5px",
    fontStyle: "italic"
  },
  textCaption: {
    fontSize: 11,
    textAlign: "justify",
    lineHeight: "1.5px",
    color: "#707070",
    fontStyle: "italic"
  },
  line: {
    height: 1,
    backgroundColor: "#000" // Black line
  },
  list: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "justify"
  },
  bullet: {
    fontSize: 12,
    marginRight: 5
  }
});

const toTitleCase = (str: string) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) =>
      word.length > 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
    )
    .join(" ");
};
const ResumeTemplate1PDF: React.FC<ResumeTemplate1PDFProps> = ({
  dataUser
}) => {
  return (
    <Document title={`CVRATOR-${dataUser?.name}`}>
      <Page size="A4" style={styles.page}>
        {/* Section 1 - Identity */}
        <View style={styles.section}>
          <Text style={styles.title1}>{dataUser?.name}</Text>
          <View style={styles.rowGap10}>
            <Text style={styles.text}>{dataUser?.address}</Text>
            <Text style={styles.text}>|</Text>
            <Text style={styles.text}>{dataUser?.phone}</Text>
            <Text style={styles.text}>|</Text>
            <Text style={styles.text}>{dataUser?.email}</Text>
          </View>
        </View>

        {/* Section 2 - Summary */}
        <View style={styles.section}>
          <Text style={styles.title2}>Summary</Text>
          <View style={styles.line} />
          <Text style={styles.text}>{dataUser?.summary}</Text>
        </View>

        {/* Section 3 - Experience */}
        <View style={styles.section}>
          <Text style={styles.title2}>Experience</Text>
          <View style={styles.line} />
          {dataUser?.experience?.map((item, key) => (
            <View key={key}>
              <View style={styles.rowNoGapJustifySpaceBetween}>
                <View style={styles.rowGap5}>
                  <Text style={styles.text}>{item?.company}</Text>
                  <Text style={styles.textCaption}>({item?.type})</Text>
                </View>
                <Text style={styles.text}>{item?.location}</Text>
              </View>
              <View style={styles.rowNoGapJustifySpaceBetween}>
                <Text style={styles.textItalic}>{item?.title}</Text>
                <Text style={styles.text}>{item?.duration}</Text>
              </View>
              <View style={styles.list}>
                {item?.description?.split(",")?.map((item, key) => (
                  <View style={styles.listItem} key={key}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.textItem}>
                      {toTitleCase(item.trim())}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Section 4 - Education */}
        <View style={styles.section}>
          <Text style={styles.title2}>Education</Text>
          <View style={styles.line} />
          {dataUser?.education?.map((item, key) => (
            <View key={key}>
              <View style={styles.rowNoGapJustifySpaceBetween}>
                <Text style={styles.text}>{item?.institution}</Text>
                <Text style={styles.text}>{item?.location}</Text>
              </View>
              <View style={styles.rowNoGapJustifySpaceBetween}>
                <Text
                  style={styles.textItalic}
                >{`${item?.degree} ${item?.field}`}</Text>
                <Text style={styles.text}>{item?.duration}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Section 4 - Additional */}
        <View style={styles.section}>
          <Text style={styles.title2}>Additional</Text>
          <View style={styles.line} />
          {/* Skills */}
          <View style={styles.rowGap5Wrap}>
            <View style={styles.rowGap5WrapLeft}>
              <Text style={styles.text}>Skills</Text>
              <Text style={styles.text}>:</Text>
            </View>
            <View style={styles.rowGap5WrapRight}>
              {dataUser?.skills?.map((item, key, array) => (
                <Text style={styles.text} key={key}>
                  {`${item?.title}${key === array.length - 1 ? "." : ","}`}
                </Text>
              ))}
            </View>
          </View>
          {/* Certifications */}
          {dataUser?.certifications?.length > 0 && (
            <View style={styles.rowGap5Wrap}>
              <View style={styles.rowGap5WrapLeft}>
                <Text style={styles.text}>Certifications</Text>
                <Text style={styles.text}>:</Text>
              </View>
              <View style={styles.rowGap5WrapRight}>
                {dataUser?.certifications?.map((item, key, array) => (
                  <Text style={styles.text} key={key}>
                    {`${item?.title}${key === array.length - 1 ? "." : ","}`}
                  </Text>
                ))}
              </View>
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default ResumeTemplate1PDF;

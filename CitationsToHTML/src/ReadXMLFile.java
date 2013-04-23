import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.DocumentBuilder;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.w3c.dom.Node;
import org.w3c.dom.Element;
import java.io.File;

public class ReadXMLFile {

	public static void main(String argv[]) {

		try {

			File fXmlFile = new File(
					"/Users/twh116/Desktop/Solar Website/GitHub/CitationsToHTML/Citations.xml");
			DocumentBuilderFactory dbFactory = DocumentBuilderFactory
					.newInstance();
			DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
			Document doc = dBuilder.parse(fXmlFile);

			// optional, but recommended
			// read this -
			// http://stackoverflow.com/questions/13786607/normalization-in-dom-parsing-with-java-how-does-it-work
			doc.getDocumentElement().normalize();

			// System.out.println("Root element :" +
			// doc.getDocumentElement().getNodeName());

			NodeList nList = doc.getElementsByTagName("entry");

			// System.out.println("----------------------------");
			System.out.println("<ul> \n");

			for (int temp = 0; temp < nList.getLength(); temp++) {

				Node nNode = nList.item(temp);

				// System.out.println("\nCurrent Element :" +
				// nNode.getNodeName());

				if (nNode.getNodeType() == Node.ELEMENT_NODE) {

					Element eElement = (Element) nNode;

					System.out.println("<li class='citation'>");

					// Print authors
					NodeList authorList = eElement
							.getElementsByTagName("author");
					for (int temp2 = 0; temp2 < authorList.getLength(); temp2++) {
						Node authorNode = authorList.item(temp2);
						if (authorNode.getNodeType() == Node.ELEMENT_NODE) {
							Element authorElement = (Element) authorNode;
							System.out.print(authorElement.getTextContent());
							if (temp2 < authorList.getLength() - 1)
								System.out.print(", ");
						}
					}
					System.out.println(". ");

					// Print title
					String title = eElement.getElementsByTagName("title")
							.item(0).getTextContent();
					/*String cleanTitle = title.replace('{', '"').replace('}',
							'"');*/
					String cleanTitle = title.replace('{', ' ').replace('}',
					' ').trim();
					//System.out.println(cleanTitle + ". ");
					System.out.println("<i> " + cleanTitle + "</i>. ");

					// Print journal, volume, and page number
					String journal = eElement.getElementsByTagName("journal")
							.item(0).getTextContent();
					System.out.print(journal);
					try {
						String volume = eElement.getElementsByTagName("volume")
								.item(0).getTextContent();
						System.out.print(" " + volume + ",");
					} catch (Exception e) {
						
					}
					try {
						String pages = eElement.getElementsByTagName("pages")
								.item(0).getTextContent();
						System.out.print(" " + pages + ",");
					} catch (Exception e) {
		
					}
					try {
						String year = eElement.getElementsByTagName("year")
								.item(0).getTextContent();
						System.out.println(" (" + year + ").");
					} catch (Exception e) {
						System.out.println(".");
					}
					
					
					
					System.out.println("</li> \n");

				}
			}

			System.out.println("</ul>");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
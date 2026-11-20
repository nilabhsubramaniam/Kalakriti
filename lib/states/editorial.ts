/** Server-side editorial notes. Keys retain the geometry registry's legacy names.
 * Sources and scope are recorded in docs/audit/STATE_CRAFT_CONTENT.md.
 * These describe traditions, not product provenance or verified sellers.
 */
export interface CraftGuide {
  name: string;
  description: string;
  material: string;
}
export interface RegionalEditorial {
  intro: string;
  crafts: CraftGuide[];
}
const craft = (name: string, material: string, description: string): CraftGuide => ({ name, material, description });

export const REGIONAL_EDITORIAL: Record<string, RegionalEditorial> = {
  Bihar: {
    intro: 'Begin in Mithila, where painting, embroidery and grass work offer different ways to tell a story. Follow the painted line into the texture of cloth and the careful curves of a woven basket.',
    crafts: [
      craft('Madhubani painting', 'Line & colour', 'Also known as Mithila painting, this tradition brings people, plants, animals and sacred imagery into richly patterned compositions. Look for the relationship between the outline and the detail within it.'),
      craft('Sujani embroidery', 'Cloth & thread', 'Running stitches bring figures and everyday stories onto cloth. The movement of the needle becomes both the drawing and the texture of the finished work.'),
      craft('Sikki grass work', 'Grass & fibre', 'Fine grass is shaped into baskets, containers and decorative forms. Close observation reveals how a flexible strand becomes a firm, carefully finished object.'),
    ],
  },
  'Andhra Pradesh': {
    intro: 'Painted cloth, wooden figures and lacquered toys make a colourful introduction to Andhra Pradesh. Explore how a drawn line, a carved form and a polished surface each create their own kind of character.',
    crafts: [
      craft('Kalamkari', 'Cloth & colour', 'Kalamkari brings drawing and pattern to textiles through pen work or block printing. Compare flowing narrative compositions with the repeated rhythm of a printed design.'),
      craft('Kondapalli toys', 'Wood & paint', 'Painted wooden figures turn animals, occupations and scenes of daily life into small sculptural stories. Their character comes from both the carved silhouette and its painted details.'),
      craft('Etikoppaka lacquerware', 'Turned wood & lacquer', 'Rounded wooden forms and colourful lacquer finishes give these toys and objects their distinctive appearance. Notice the smooth curves and the way colour follows the turned shape.'),
    ],
  },
  'Arunanchal Pradesh': {
    intro: 'Arunachal Pradesh holds many distinct community traditions. Painted scrolls, woven cloth and cane work offer starting points; their designs should be understood through the particular makers and communities behind them.',
    crafts: [
      craft('Thangka painting', 'Painted scroll', 'Buddhist imagery is arranged through careful drawing and detailed colour work. A thangka is connected to religious practice as well as to the skill of its painter.'),
      craft('Community weaving', 'Yarn & loom', 'Textile patterns vary across communities rather than forming one statewide style. Look at the arrangement of stripes, borders and repeated motifs within each individual weave.'),
      craft('Cane & bamboo work', 'Cane & bamboo', 'Split and woven plant materials become baskets and useful objects. The spacing, tension and finishing of the weave shape both its appearance and its function.'),
    ],
  },
  Assam: {
    intro: 'Assam invites a closer look at silk, from the golden character of Muga to the texture of Eri. Alongside textiles, metal vessels show another expression of the region’s material skill.',
    crafts: [
      craft('Muga silk', 'Silk & loom', 'Muga is valued for its naturally golden tone and lustre. Looking closely at the fabric reveals how light, woven structure and pattern work together.'),
      craft('Eri silk', 'Spun silk', 'Eri introduces a different texture to Assam’s silk traditions. Its yarn and woven surface offer a useful comparison with the sheen of Muga.'),
      craft('Brass & bell metal', 'Metalwork', 'Vessels and ceremonial objects bring shape and finish into focus. Explore how the profile of a bowl or stand balances ornament with practical use.'),
    ],
  },
  Chhattisgarh: {
    intro: 'In Chhattisgarh, metalwork gives figures and everyday forms a strong sculptural presence. Begin with Dhokra and wrought iron, then notice the different textures each making process leaves behind.',
    crafts: [
      craft('Dhokra casting', 'Lost-wax metalwork', 'A model built in wax becomes the starting point for a cast metal form. Fine raised patterns and sculptural details give each composition its surface rhythm.'),
      craft('Wrought iron', 'Forged metal', 'Iron is shaped into figures, decorative panels and useful objects. Strong outlines and repeated forms give the work its visual character.'),
      craft('Woodwork', 'Carved wood', 'Carving turns a solid piece of wood into a patterned or sculptural surface. Compare the broad shape with the smaller cuts that bring the form into focus.'),
    ],
  },
  Goa: {
    intro: 'Goa’s craft story extends beyond the shoreline into woven cloth, pottery and coconut-shell work. These traditions bring familiar materials into objects made for use, display and everyday life.',
    crafts: [
      craft('Kunbi weaving', 'Woven cloth', 'The checked Kunbi textile offers a clear study of colour and repetition. Follow the intersecting lines and the balance between the body of the cloth and its border.'),
      craft('Terracotta pottery', 'Clay & firing', 'Pots, figures and decorative objects reveal the versatility of clay. Their shape, surface and fired colour are all part of the finished work.'),
      craft('Coconut-shell work', 'Carved shell', 'The hard shell of a coconut can be cut, shaped and polished into useful or decorative objects. Its curved form and dark surface remain part of the design.'),
    ],
  },
  Gujarat: {
    intro: 'Gujarat’s textile traditions use many different paths to pattern: embroidery, tied yarn, tied cloth and carved printing blocks. Explore the process behind the surface rather than treating every colourful textile as the same craft.',
    crafts: [
      craft('Kutch embroidery', 'Cloth & thread', 'Kutch includes distinct embroidery traditions associated with different communities. Stitch, colour and, in some styles, mirrorwork create a richly varied textile landscape.'),
      craft('Patola silk', 'Silk & resist-dyed yarn', 'Pattern is planned through dyed yarn before it becomes woven cloth. The meeting of threads is central to the clarity and rhythm of the design.'),
      craft('Ajrakh printing', 'Cloth & carved blocks', 'Repeated block impressions build layered geometric patterns. Look for the alignment of each colour and the relationship between the border and the central field.'),
    ],
  },
  Haryana: {
    intro: 'Haryana’s textile and household crafts reward attention to everyday materials. Embroidery, woven floor coverings and pottery show how practical objects can also carry a strong visual identity.',
    crafts: [
      craft('Phulkari embroidery', 'Cloth & thread', 'Part of a wider regional embroidery tradition, Phulkari brings colour and patterned stitches to cloth. Study the density of the stitch and the spaces left around it.'),
      craft('Durrie weaving', 'Woven yarn', 'Flatwoven floor coverings turn stripes and geometric shapes into durable textiles. Pattern emerges from the meeting of the loom’s threads.'),
      craft('Pottery', 'Clay & firing', 'Clay vessels and decorative forms connect shape with everyday use. Look at the rim, body and base to see how each part contributes to the object.'),
    ],
  },
  'Himachal Pradesh': {
    intro: 'Shawls, embroidery and carved wood offer different ways into Himachal Pradesh’s craft traditions. The fine detail of a Chamba Rumal sits alongside the structure and warmth of woven cloth.',
    crafts: [
      craft('Chamba Rumal', 'Cloth & silk thread', 'Figurative embroidery turns a textile panel into a narrative composition. Follow the arrangement of figures and the fine stitched outlines that connect them.'),
      craft('Kullu shawls', 'Woven cloth', 'Patterned borders bring geometric rhythm to the shawl. Compare the detail at its edge with the quieter expanse of the main fabric.'),
      craft('Wood carving', 'Carved wood', 'Architectural details and smaller objects show how carving changes a wooden surface. Repetition and relief give the work both pattern and depth.'),
    ],
  },
  'Jammu & Kashmir': {
    intro: 'The region’s craft vocabulary includes woven shawls, fine embroidery, carved walnut wood and painted papier-mâché. Look beyond ornament to the material and the sequence of work that make each tradition distinct.',
    crafts: [
      craft('Pashmina weaving', 'Fine animal fibre', 'A shawl begins with fibre, yarn and the structure of a weave. A finished product’s fibre composition and origin need to be checked individually rather than assumed from its appearance.'),
      craft('Kashmiri embroidery', 'Needlework & cloth', 'Floral forms and finely arranged stitches transform a textile surface. Different techniques produce different textures, so the name alone does not describe every piece.'),
      craft('Walnut wood carving', 'Carved wood', 'Relief carving creates patterned surfaces on wooden objects. Notice the depth of the cuts and the way the design works with the grain.'),
    ],
  },
  Jharkhand: {
    intro: 'Jharkhand’s painted traditions make the wall an expressive surface, while metal and fibre work create objects with a different kind of presence. Begin with Sohrai and Khovar, keeping their distinct settings in view.',
    crafts: [
      craft('Sohrai painting', 'Wall painting', 'Animal and plant forms are part of this regional painting vocabulary. The sweep of a line and the arrangement of shapes give the composition its character.'),
      craft('Khovar painting', 'Pattern & painted surface', 'Khovar offers another approach to patterned wall art. Compare the treatment of line, contrast and repeated forms with other painting traditions of the region.'),
      craft('Dokra metalwork', 'Cast metal', 'Figures and decorative objects emerge through metal casting. Look closely at the modelled surface and the small details that give a form its identity.'),
    ],
  },
  Karnataka: {
    intro: 'Karnataka brings together the sheen of silk, the contrast of inlaid metal and the colour of lacquered wood. Each tradition asks a different question of its material: how to weave it, engrave it or turn it.',
    crafts: [
      craft('Bidriware', 'Metal & silver inlay', 'Associated with Bidar, Bidriware sets bright inlaid designs against a dark metal surface. The contrast makes the precision of the engraved pattern especially visible.'),
      craft('Mysore silk', 'Silk & loom', 'Silk textiles bring colour, drape and woven detail together. Look at the body, border and finish as parts of one carefully balanced composition.'),
      craft('Channapatna toys', 'Turned wood & lacquer', 'Simple rounded shapes and bright finishes are central to these wooden toys. The turned form provides the foundation for their playful character.'),
    ],
  },
  Kerala: {
    intro: 'Kerala’s crafts range from the restraint of an ivory-and-gold textile to the precision of a polished metal mirror. Coir work adds another material story, rooted in the useful possibilities of coconut fibre.',
    crafts: [
      craft('Kasavu textiles', 'Cloth & golden borders', 'White or off-white cloth meets a distinctive golden border. The contrast between the plain field and the edge gives the textile its quiet visual strength.'),
      craft('Aranmula metal mirror', 'Polished metal', 'A carefully made and polished metal surface creates the reflection. The mirror offers a different relationship between material, function and finish from a glass-backed mirror.'),
      craft('Coir work', 'Coconut fibre', 'Fibre from coconut husk is worked into yarn and useful woven forms. Texture and structure are as important to its character as the finished pattern.'),
    ],
  },
  'Madhya Pradesh': {
    intro: 'Painted stories and woven cloth meet in Madhya Pradesh’s craft landscape. Gond painting, Chanderi textiles and Bagh printing provide three distinct ways of building pattern through line, thread and repeated impressions.',
    crafts: [
      craft('Gond painting', 'Line, dots & colour', 'Trees, animals and narrative forms can be filled with rhythmic marks. The inner pattern is part of the drawing, giving the larger shape a lively surface.'),
      craft('Chanderi textiles', 'Woven cloth', 'Delicate woven surfaces and motifs give Chanderi its character. Compare the relationship between the light ground, the border and the decorative elements.'),
      craft('Bagh printing', 'Cloth & carved blocks', 'Repeating block impressions create a clear visual rhythm across the cloth. The alignment of the print and the balance of pattern and ground invite close attention.'),
    ],
  },
  Maharashtra: {
    intro: 'Maharashtra’s craft traditions move between the painted line, the loom and leatherwork. Warli compositions and Paithani textiles show how very different visual languages can belong to the same regional journey.',
    crafts: [
      craft('Warli painting', 'Geometric figures & line', 'People, animals and shared activities are arranged through a distinctive vocabulary of simple forms. Look at how figures connect to make the larger scene.'),
      craft('Paithani silk', 'Silk & woven ornament', 'Colour and decorative woven borders shape the identity of a Paithani textile. Its patterned areas reward the same close attention as its main field.'),
      craft('Kolhapuri chappals', 'Leatherwork', 'Cutting, shaping and joining leather create footwear with a recognisable form. The construction and finish reveal the practical decisions behind the design.'),
    ],
  },
  Manipur: {
    intro: 'Manipur’s craft story includes dark pottery, patterned cloth and woven reed. These materials invite different kinds of attention, from the curve of a pot to the repeated structure of a mat.',
    crafts: [
      craft('Longpi pottery', 'Hand-shaped pottery', 'Associated with Longpi in the Ukhrul region, this dark pottery has a distinctive surface and form. Notice its contours and the finish of the vessel.'),
      craft('Moirang Phee weaving', 'Patterned cloth', 'A distinctive border pattern gives this textile tradition its identity. Look at the repetition along the edge and its relationship with the body of the fabric.'),
      craft('Kauna reed work', 'Reed & weaving', 'Reeds are woven into mats, baskets and other useful forms. Evenness, tension and carefully finished edges contribute to both structure and appearance.'),
    ],
  },
  Meghalaya: {
    intro: 'Meghalaya’s textile story includes Ryndia, or Eri silk, alongside cane and bamboo work. Follow the material from yarn to cloth, then compare that woven surface with the structure of a basket.',
    crafts: [
      craft('Ryndia / Eri silk', 'Spun silk & loom', 'Eri silk weaving is an important part of Meghalaya’s textile work. Its textured surface puts the character of the yarn and the rhythm of the weave in focus.'),
      craft('Bamboo & cane work', 'Split plant fibre', 'Baskets and useful household forms are built through interlacing material. Different weaves create different surfaces, strengths and shapes.'),
      craft('Handwoven textiles', 'Yarn & pattern', 'The region includes distinct community textile traditions. Read the colours and repeated patterns through the particular textile rather than assuming one style represents every community.'),
    ],
  },
  Mizoram: {
    intro: 'Woven cloth is a central point of entry into Mizoram’s craft traditions. Puan textiles bring stripes and patterned bands into focus, while bamboo work offers a different expression of interlaced structure.',
    crafts: [
      craft('Puan weaving', 'Yarn & loom', 'Puan textiles are recognised for their patterned surfaces and carefully arranged bands. Each named textile deserves attention to its own composition and use.'),
      craft('Puanchei textiles', 'Patterned woven cloth', 'Richly worked bands and colour arrangements distinguish Puanchei. Look at how smaller motifs combine into a larger repeating composition.'),
      craft('Bamboo work', 'Bamboo & weaving', 'Splitting and interlacing bamboo creates baskets and other objects. The weave, rim and finishing reveal how the material is guided into shape.'),
    ],
  },
  Nagaland: {
    intro: 'Nagaland’s craft traditions belong to many different communities. Woven shawls, woodwork and basketry should be approached through those individual identities, rather than as one interchangeable decorative style.',
    crafts: [
      craft('Community shawl traditions', 'Yarn & loom', 'Shawls use distinctive arrangements of colour and pattern. Meanings and customary uses differ, so the community and textile name matter as much as the visual design.'),
      craft('Wood carving', 'Carved wood', 'Objects and architectural forms use carved detail to shape a surface. Look at the relationship between the original mass of the wood and the finished outline.'),
      craft('Cane & bamboo work', 'Interlaced fibre', 'Baskets and useful forms show careful control of material and structure. Compare an open weave with a closely packed surface to see how function influences the design.'),
    ],
  },
  'NCT of Delhi': {
    intro: 'Delhi’s craft story reflects a city of workshops, markets and exchanged skills. Embroidery, metalwork and jewellery offer ways to explore that layered making culture without assigning every object a single origin.',
    crafts: [
      craft('Zari & Zardozi', 'Cloth & decorative thread', 'Metallic thread and raised ornament build a textured surface on cloth. Observe how the design catches light and how the embroidery follows the form of the textile.'),
      craft('Metalwork', 'Metal & surface detail', 'Useful and decorative objects bring shaping and ornament together. The outline, joins and finishing tell different parts of the making story.'),
      craft('Jewellery making', 'Metal & ornament', 'Small-scale design depends on careful proportion and finishing. Look beyond the overall shape to the joins, settings and details of an individual piece.'),
    ],
  },
  Odisha: {
    intro: 'Odisha brings narrative painting, woven pattern and appliqué into a particularly vivid conversation. Begin with the painted surface, then explore how thread and cut cloth build their own forms of imagery.',
    crafts: [
      craft('Pattachitra', 'Painted narrative', 'Careful outlines and detailed compositions tell stories through painted figures and ornament. Borders help frame the scene and connect its many small elements.'),
      craft('Sambalpuri textiles', 'Resist-dyed yarn & loom', 'Pattern is prepared through yarn dyeing and brought together in the weave. Repeating forms show the planning required before the fabric is finished.'),
      craft('Pipli appliqué', 'Cut cloth & stitching', 'Pieces of coloured cloth are arranged and stitched into larger designs. The edges, overlaps and repeated shapes give the work a strong graphic presence.'),
    ],
  },
  Punjab: {
    intro: 'Punjab’s Phulkari embroidery offers a vivid introduction to colour and stitch. Alongside embroidered cloth, jutti making and woodwork reveal other ways regional skill takes shape in useful objects.',
    crafts: [
      craft('Phulkari embroidery', 'Cloth & colourful thread', 'Flower-work and geometric arrangements bring colour to embroidered cloth. Notice how closely worked stitches catch light and build the pattern across the surface.'),
      craft('Jutti making', 'Leather & decorative work', 'The curved form of a jutti brings construction and ornament together. Compare the stitched structure with the decorative treatment of its upper surface.'),
      craft('Wood inlay', 'Wood & inset pattern', 'Contrasting materials are set into a wooden surface to create ornament. The precision of each fitted piece contributes to the clarity of the overall design.'),
    ],
  },
  Rajasthan: {
    intro: 'Rajasthan offers many approaches to colour, from blue pottery and miniature painting to printed cloth. Each tradition has its own centres and techniques, making the place of making part of the story.',
    crafts: [
      craft('Jaipur blue pottery', 'Glaze & decorated forms', 'Blue and other glazed colours give these objects a distinctive surface. Look at the relationship between the painted ornament and the curve of the form.'),
      craft('Hand-block printing', 'Carved blocks & cloth', 'A repeated impression becomes a larger patterned textile. Different centres and printing traditions bring their own arrangements, colours and approaches.'),
      craft('Miniature painting', 'Fine brushwork', 'Small-scale compositions reward close looking. Carefully drawn figures, architectural details and ornament create an intricate world within a modest frame.'),
    ],
  },
  Sikkim: {
    intro: 'Sikkim’s painted scrolls and woven traditions bring detail, pattern and material together. Thangka painting sits alongside carpet and Lepcha weaving, each with a distinct setting and purpose.',
    crafts: [
      craft('Thangka painting', 'Painted scroll', 'Buddhist figures and symbols are composed through disciplined drawing and colour. The image belongs to a religious context as well as a painting tradition.'),
      craft('Carpet weaving', 'Yarn & woven structure', 'Pattern and colour give a carpet its visual identity, while the worked surface adds texture. Borders and central forms can be read as parts of one composition.'),
      craft('Lepcha weaving', 'Patterned cloth', 'Woven bands and colour arrangements provide an introduction to Lepcha textile work. The identity of the tradition is an important part of understanding the cloth.'),
    ],
  },
  'Tamil Nadu': {
    intro: 'Tamil Nadu’s craft world moves from silk and woven borders to gilded paintings and cast bronze. Explore the different ways a loom, brush and mould can give form to a detailed composition.',
    crafts: [
      craft('Kanjivaram silk', 'Silk & woven borders', 'The relationship between body, border and decorative end panel shapes the textile. Colour contrasts and woven motifs are central to its visual character.'),
      craft('Thanjavur painting', 'Paint & gilded detail', 'Also called Tanjore painting, this tradition combines detailed painted imagery with rich surface ornament. Gilded areas add another dimension to the composition.'),
      craft('Bronze casting', 'Modelled & cast metal', 'A sculptural model guides the making of a bronze form. Examine the posture, silhouette and smaller surface details as connected parts of the finished figure.'),
    ],
  },
  Telangana: {
    intro: 'Telangana’s craft traditions bring together the planning of an ikat weave and the colour of painted objects. Pochampally, Nirmal and Gadwal offer distinct starting points for exploring that material landscape.',
    crafts: [
      craft('Pochampally Ikat', 'Resist-dyed yarn & loom', 'Yarn is tied and dyed before weaving, so the pattern is planned ahead of the cloth. The characteristic softened edges reveal how the threads meet.'),
      craft('Nirmal painting', 'Painted surface', 'Detailed imagery and decorative compositions are associated with Nirmal’s painting tradition. Look at how colour and fine outlines organise the scene.'),
      craft('Gadwal sarees', 'Woven cloth', 'Contrasting borders and decorative end panels are important to the appearance of Gadwal textiles. Read the weave and colour arrangement together, rather than as separate details.'),
    ],
  },
  Tripura: {
    intro: 'Tripura’s woven textiles and bamboo work offer two different expressions of pattern. Risa cloth brings attention to the loom, while baskets and mats show how plant materials become useful structures.',
    crafts: [
      craft('Risa textiles', 'Yarn & loom', 'This traditional Tripuri textile carries carefully arranged woven pattern. Its composition and use are part of the region’s textile identity.'),
      craft('Bamboo weaving', 'Split bamboo', 'Interlaced bamboo becomes mats, baskets and other useful forms. Look closely at how the width and spacing of the strips change the surface.'),
      craft('Cane work', 'Cane & structure', 'Flexible cane can shape the frame and finishing of woven objects. Bends, joins and wrapped edges show how structure becomes part of the design.'),
    ],
  },
  'Uttar Pradesh': {
    intro: 'Uttar Pradesh brings woven silk, embroidery and inlaid stone into a wide craft landscape. Varanasi, Lucknow and Agra provide different points of entry, each with its own materials and making traditions.',
    crafts: [
      craft('Banarasi textiles', 'Silk & woven pattern', 'Decorative woven motifs and borders give Banarasi cloth its visual richness. Look at how the repeated pattern relates to the body and end panel of the textile.'),
      craft('Chikankari', 'Needlework & cloth', 'Fine embroidery creates a range of textures through different stitches. The quiet effect of a finished piece becomes more intricate when seen close up.'),
      craft('Marble inlay', 'Stone & fitted detail', 'Small shaped pieces are fitted into a stone surface to form patterns. The meeting of each element reveals the precision behind the larger composition.'),
    ],
  },
  Uttarakhand: {
    intro: 'Uttarakhand’s Aipan art connects a drawn pattern with the spaces of everyday and ceremonial life. Woven wool and copper work introduce other textures to this regional craft journey.',
    crafts: [
      craft('Aipan art', 'Ritual drawing & pattern', 'Associated with Kumaon, Aipan brings carefully arranged symbols and geometric forms to decorated surfaces. Its setting and occasion are part of its meaning.'),
      craft('Woollen weaving', 'Wool & loom', 'Woven wool brings warmth, structure and pattern together. Explore the feel of the material alongside its borders and repeating motifs.'),
      craft('Copper work', 'Shaped metal', 'Vessels reveal how a metal sheet or form can be worked into a useful object. Shape, joins and finish provide clues to its construction.'),
    ],
  },
  'West Bengal': {
    intro: 'West Bengal’s craft traditions bring stories into both cloth and clay. Kantha embroidery, woven silk and terracotta each use a different kind of mark to build a richly detailed surface.',
    crafts: [
      craft('Kantha embroidery', 'Running stitch & cloth', 'Small running stitches build texture, figures and flowing patterns. Look at how the stitching moves across the cloth and gathers individual marks into a larger image.'),
      craft('Baluchari silk', 'Silk & woven imagery', 'Figurative woven panels give Baluchari textiles a narrative quality. The decorative end panel and border offer especially detailed areas to explore.'),
      craft('Bankura terracotta', 'Modelled clay', 'Recognisable animal forms and sculptural details bring character to fired clay. The silhouette and smaller modelled features work together to define the object.'),
    ],
  },
  Chandigarh: {
    intro: 'Chandigarh offers a different craft starting point: Nek Chand’s Rock Garden. Its assembled figures invite a closer look at how overlooked materials can acquire new form and meaning.',
    crafts: [
      craft('Rock Garden mosaic', 'Reused ceramic & fragments', 'Pieces of tile, bangles and other discarded materials become textured figures and surfaces. The identity of each fragment contributes to the larger composition.'),
      craft('Assembled sculpture', 'Found materials', 'The garden’s figures demonstrate how repeated small elements can form a larger sculptural presence. Look at the outline first, then the individual pieces within it.'),
      craft('Material reuse', 'Surface & composition', 'The Rock Garden makes a creative practice of bringing discarded objects together. It offers a way to consider material choice alongside the finished visual effect.'),
    ],
  },
  'Andaman & Nicobar Island': {
    intro: 'Island craft traditions include woven mats, woodwork and cane work. The Andaman and Nicobar islands contain distinct communities, so individual names and origins matter when describing any object.',
    crafts: [
      craft('Nicobari mats', 'Woven plant material', 'A mat brings repeated interlacing into a broad, useful surface. Its pattern, edge and finish can be read alongside the specific community tradition it comes from.'),
      craft('Woodwork', 'Shaped wood', 'Wooden objects reveal the relationship between grain, form and practical use. An individual item’s material and origin should be documented rather than inferred.'),
      craft('Cane & bamboo work', 'Interlaced fibre', 'Baskets and other useful objects take shape through woven structure. The material’s spacing and tension contribute to both the form and its strength.'),
    ],
  },
  'Dadara & Nagar Havelli': {
    intro: 'Dadra and Nagar Haveli’s craft story includes Warli painting and woven household forms. These traditions connect with a wider regional landscape while retaining the identities of their makers and communities.',
    crafts: [
      craft('Warli painting', 'Line & geometric forms', 'Warli painting is also practised around Silvassa. Its figures and scenes belong to a wider tradition associated with the northern Sahyadri region.'),
      craft('Bamboo work', 'Bamboo & weaving', 'Woven forms turn split material into useful objects. Notice how the outline, rim and surface pattern work together.'),
      craft('Mat weaving', 'Fibre & interlacing', 'A repeated weave builds a practical surface from many small strands. The regularity of the pattern and the finishing at the edges reveal the maker’s control.'),
    ],
  },
  'Daman & Diu': {
    intro: 'Palm, fibre and wood offer a quiet starting point for this coastal chapter. Explore how interlacing, knotting and joinery turn familiar materials into objects shaped for everyday use.',
    crafts: [
      craft('Palm-leaf work', 'Leaf & interlacing', 'A folded or woven leaf surface can become a mat or small object. Look at the arrangement of the strips and the way the edges are finished.'),
      craft('Net weaving', 'Thread & knots', 'Repeated knots create an open, flexible structure. The size and regularity of the mesh show how a simple repeated action can shape a useful object.'),
      craft('Woodwork', 'Wood & joinery', 'Wooden forms combine shaping, fitting and surface finishing. Their practical construction can be appreciated alongside any decorative detail.'),
    ],
  },
  Lakshadweep: {
    intro: 'Coconut-based materials provide a starting point for exploring Lakshadweep’s craft economy. Coir and shell work show how different parts of one familiar material can support very different objects.',
    crafts: [
      craft('Coir yarn', 'Coconut-husk fibre', 'Fibres are worked into yarn that can become rope and woven goods. The twist of the strand is a small detail with an important structural role.'),
      craft('Coir mats', 'Woven fibre', 'A worked surface of coconut fibre brings texture and practical use together. Look at the arrangement of the weave and the finish around its edges.'),
      craft('Coconut-shell work', 'Shaped shell', 'Cutting and polishing reveal the dark surface of a hard coconut shell. Its natural curve provides a starting point for smaller useful and decorative forms.'),
    ],
  },
  Puducherry: {
    intro: 'Puducherry’s craft landscape includes handmade paper, studio pottery and woven grass. These traditions offer different ways to consider touch, surface and the relationship between a material and its finished form.',
    crafts: [
      craft('Handmade paper', 'Fibre & sheet forming', 'A paper sheet carries the texture of its fibres and the character of its making. Look at its surface, thickness and edges as part of the finished work.'),
      craft('Studio pottery', 'Clay & firing', 'Individual forms and surface treatments give studio pottery its range. The shape of a vessel and the finish of its surface can be considered together.'),
      craft('Korai grass mats', 'Grass & weaving', 'Grass is worked into a closely woven surface. The repeated structure and neatly finished edges bring a simple material into a useful textile-like form.'),
    ],
  },
};

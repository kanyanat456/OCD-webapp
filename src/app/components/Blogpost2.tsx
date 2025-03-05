import React from "react";

export default function Blogpost2() {
  return (
    <div>
      <>
        {/* <title>Free Css Layout</title> */}
        <meta
          httpEquiv="content-type"
          content="text/html; charset=iso-8859-1"
        />
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <div id="container">
          <div id="header">
            <h1>
              <a href="http://www.free-css.com/free-css-layouts.php">
                Free CSS Layouts
              </a>
            </h1>
          </div>
          <div id="wrapper">
            <div>
              <p className="lead">การวินิฉัยระบบองค์การภาครัฐ</p>
              <p>
                <strong>ทฤษฎีระบบ(System Theory)</strong>
              </p>
              <p>
                ทฤษฎีระบบ(System
                Theory)เป็นแนวคิดที่มององค์การเป็นระบบเปิดที่ซับซ้อน
                มีองค์ประกอบพื้นฐาน ดังนี้
                <ol>
                  <li>
                    1. องค์การเป็นหน่วย (Entity) ที่ไม่แตกต่างจากระบบอื่น ซึ่งมี
                    <ol className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>Input คือวัตถุดิบ ความสามารถของพนักงานและเงินทุน</li>
                      <li>Transformation Process กระบวนการขององค์การ</li>
                      <li>
                        Output คือสินค้า ข้อมูล บริการ Stakeholders
                        ที่เกิดจากกระบวนการขององค์การ
                      </li>
                    </ol>
                  </li>
                  <li>
                    2. สภาพแวดล้อมและขอบเขตขององค์การ(Environment and
                    Boundaries)
                    <ol className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>องค์การมีลักษณะเปิดหรือปิด</li>
                      <li>
                        ดำรงอยู่ในสิ่งแวดล้อม (ลูกค้า พันธมิตร คู่แข่ง
                        แนวโน้มต่างๆ) ที่เป็นประโยชน์หรือโทษต่อองค์การ
                      </li>
                      <li>เปลี่ยนแปลงช้าหรือเร็ว</li>
                      <li>
                        ระบบต่างๆ ล้วนอยู่ภายใต้อิทธิพลของสิ่งแวดล้อม
                        และตรงกันข้ามก็ส่งผลกระทบต่อสิ่งแวดล้อมรอบข้าง
                      </li>
                    </ol>
                  </li>
                  <li>
                    3. ทุกส่วนเกี่ยวข้องกัน (All Parts Related)
                    <ol className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>ทุกส่วนของระบบมีความเกี่ยวข้องกัน</li>
                      <li>
                        ถ้าส่วนใดส่วนหนึ่งเปลี่ยนแปลง ส่วนอื่นจะเปลี่ยนแปลงตาม
                        คือได้รับผลกระทบ
                      </li>
                    </ol>
                  </li>
                  <li>
                    4. ข้อมูลป้อนกลับ (Feed-backs)
                    <ol className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>
                        องค์การได้รับข้อมูลป้อนกลับของ Outputs จากสิ่งแวดล้อม
                      </li>
                      <li>ข้อมูลปรากฏอยู่ในหลายรูปแบบ เช่น</li>
                    </ol>
                  </li>
                  <li>
                    {" "}
                    <ol className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>ผลการให้บริการจากหน่วยงานภาครัฐ ผลประกอบการ</li>
                      <li>ปฏิสัมพันธ์ที่เกิดกับองค์การอื่น</li>
                    </ol>
                  </li>
                  <li>
                    5. ภายในระบบมีปฏิสัมพันธ์กัน (Systems Within Systems)
                    <ol className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>ระดับบุคคล</li>
                      <li>ระดับกลุ่ม</li>
                      <li>ระหว่างกลุ่ม</li>
                      <li>ระดับองค์การ</li>
                    </ol>
                  </li>
                </ol>
              </p>
              <p className="lead">
                การวินิจฉัยระบบด้วย Weisbord’s Six-Box Model
              </p>
              <p>
                การวินิจฉัยระบบด้วย Weisbord’s Six-Box Model ได้แก่
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    ความมุ่งหมาย (Purpose) หรือพันธกิจ (Mission)มีความชัดเจน
                    ได้รับการยอมรับจากพนักงานหรือไม่
                  </li>
                  <li>
                    {" "}
                    โครงสร้าง (Structure)กิจกรรม/งานต่างๆ
                    ถูกแบ่งในลักษณะใดช่วยตอบสนองต่อความมุ่งหมาย/พันธกิจอย่างมีประสิทธิภาพหรือไม่
                  </li>
                  <li>
                    ความสัมพันธ์
                    (Relationships)การประสานงานระหว่างหน่วยงานเป็นไปด้วยดีหรือไม่หรือก่อให้เกิดความขัดแย้งอย่างไร
                    และจัดการกับความขัดแย้งนั้นอย่างไร
                  </li>
                  <li>
                    รางวัล
                    (Rewards)มีการให้รางวัลสำหรับผลงานที่ต้องการหรือไม่หรือมีมาตรการลงโทษอย่างไร
                  </li>
                  <li>
                    การนำ
                    (Leadership)นำการขับเคลื่อนองค์การมีหน้าที่กำกับติดตามความเป็นไป
                    หรือความสำเร็จขององค์ประกอบทั้ง 5 ด้าน
                  </li>
                  <li>
                    กลไกที่จำเป็น (Helpful
                    Mechanism)องค์การมีเครื่องมือหรือเทคโนโลยีสำหรับการประสานงานระหว่างหน่วยงานต่างๆ
                    อย่างเพียงพอหรือไม่
                    รวมทั้งไม่ได้คำนึงถึงอิทธิพลของสิ่งแวดล้อม
                  </li>

                  <li>
                    ข้อดี ข้อเสียของ Model
                    <ol className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>ข้อดี คือเป็น Model ที่เข้าใจง่าย</li>
                      <li>
                        ข้อเสีย เป็นการวินิจฉัยระบบที่ขาดความรอบด้าน
                        เนื่องจากไม่ได้แสดงความเกี่ยวพันของแต่ละองค์ประกอบอย่างชัดเจน
                        รวมทั้งไม่ได้คำนึงถึงอิทธิพลของสิ่งแวดล้อม

                      </li>
                     
                    </ol>
                  </li>
                </ol>
              </p>
              <p>
                Montegeraliquam sed pede in cursus praesenec vestas rhoncus wisi
                at wisi. Condisseloborttis enim et ipsum mauristie id felit
                adipiscipit ac auctortorttitor sempor. Vitantesqueat sempus non
                sed et mus sit vivamus purus netus hendiment. Pretiuma diam et
                id tempus dolor por wisi sed volutpat facilisi.
              </p>
              <p>
                Wisiet sus adipit phasellentum elit condissim consecteturpiscing
                sapien vivamus et congue. Utvel tris quismod cursus liberos elit
                nisse curabitur tur parturpis tellenterdum. Semperligula
                curabitae tellentesque nulla trices vestas ristibulum id justo
                auctor facinia. Natisdonec consequat nibh pellus.
              </p>
              <p>
                Vestibusodio euisque id elerisus lacus tincidunt sit malesuada
                lacus pellus parturpiscing. Pellenterdumat maecenatoque cras a
                magna nibh et quis diam ames et. Laoremvolutpat ac dolor eget
                eget temper lacus vestibus velit lacus venean. Magnaipsum tellus
                morbi leo aliquat nulla convallis pellentesque.
              </p>
            </div>
          </div>
          {/* <div id="navigation">
      <p>
        <strong>Navigation Here</strong>
      </p>
      <ul>
        <li>
          <a href="http://www.free-css.com/">Free CSS Templates</a>
        </li>
        <li>
          <a href="http://www.free-css.com/free-css-layouts.php">
            Free CSS Layouts
          </a>
        </li>
      </ul>
    </div>
    <div id="extra">
      <p>
        <strong>More stuff here.</strong>
      </p>
      <p>
        sit malesuada lacus pellus parturpiscing. Pellenterdumat maecenatoque
        cras a magna nibh et quis diam ames et. Laoremvolutpat ac dolor eget
        eget temper lacus vestibus velit lacus venean. Magnaipsum tellus morbi
        leo aliquat nulla convallis pellentesque.
      </p>
    </div> */}
          <div id="footer">{/* <p>Footer</p> */}</div>
        </div>
      </>
    </div>
  );
}

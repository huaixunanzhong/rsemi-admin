import { Avatar, Card, Typography, Image, Space } from '@douyinfe/semi-ui'
import { IconCalendar, IconColorPlatte } from '@douyinfe/semi-icons-lab'
import { IconMapPin } from '@douyinfe/semi-icons'

const { Title, Text } = Typography

export default function UserAvatarCard() {
  return (
    <>
      <Card bodyStyle={{ padding: 0 }}>
        <div>
          <Image
            className="object-contain"
            preview={false}
            width="100%"
            height={250}
            src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract.jpg"
          />
        </div>
        <div className="pb-4 p-x-4 MuiCardContent-root flex gap-6 justify-center flex-col items-center md:items-end md:flex-row !pt-0 md:justify-start mui-ef4y3o">
          <div className="flex rounded-bs-md mbs-[-45px] border-[5px] border-solid border-white bg-white z-1">
            <Avatar
              className="w-30 h-30"
              shape="square"
              src="https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/avatars/1.png"
            />
          </div>
          <div>
            <div>
              <div className="ml-2 inline-block align-middle">
                <Title heading={4} className="!text-[1.5rem] !lh-[1.58334]">
                  lion
                </Title>
                <Space spacing={24}>
                  <Space>
                    <IconColorPlatte className="text-[22px]" />
                    <Text
                      className="text-[0.9375rem]"
                      type="tertiary"
                      size="small"
                    >
                      Frontend Developer
                    </Text>
                  </Space>
                  <Space>
                    <IconMapPin className="text-[22px]" />
                    <Text
                      className="text-[0.9375rem]"
                      type="tertiary"
                      size="small"
                    >
                      CHENGDU, SICHUAN, CHINA
                    </Text>
                  </Space>
                  <Space>
                    <IconCalendar className="text-[22px]" />
                    <Text
                      className="text-[0.9375rem]"
                      type="tertiary"
                      size="small"
                    >
                      May 1998
                    </Text>
                  </Space>
                </Space>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}

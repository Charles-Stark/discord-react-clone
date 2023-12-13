import { ServerWithMembersWithProfiles } from "@/types";
import { MemberRole } from "@prisma/client";

interface ServerHeaderProps {
  server: ServerWithMembersWithProfiles;
  role?: MemberRole;
}

export default function ServerHeader({ server, role }: ServerHeaderProps) {
  return <></>;
}

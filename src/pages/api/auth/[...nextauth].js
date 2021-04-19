import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const getLinkedinEmail = async (accessToken) => {
  const { data } = await fetch(
    `https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))&oauth2_access_token=${accessToken}`
  );
  return data;
};

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      scope: "r_liteprofile r_emailaddress",

      profileUrl:
        "https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~digitalmediaAsset:playableStreams))",

      profile: (profileData, accountData) => {
        const profileImage =
          profileData?.profilePicture?.["displayImage~"]?.elements[0]
            ?.identifiers?.[0]?.identifier ?? "";

        const emailData = getLinkedinEmail(profileData.accessToken) || [];

        console.log("=========>");
        console.log(profileData);

        return {
          id: profileData.id,
          name: `${profileData.localizedFirstName} ${profileData.localizedLastName}`,
          email: emailData[0] ? emailData[0]["handle~"].emailAddress : null,
          image: profileImage
        };
      }
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
    // ...add more providers here
  ],

  debug: false
  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL
});

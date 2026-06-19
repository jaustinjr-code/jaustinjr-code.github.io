import { Typography, Link } from "@mui/material";
import {
  BlogErrorTitle,
  BlogRedirectDescription,
  BlogRedirectName,
  MediumLink,
} from "@resources/strings";

export function BlogError() {
  return (
    <>
      <Typography
        fontWeight="bold"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
        }}
      >
        {BlogErrorTitle}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "0.8rem", sm: "1rem", md: "1.5rem" },
          marginTop: 1,
        }}
      >
        {BlogRedirectDescription}
        <Link href={MediumLink} color="inherit">
          {BlogRedirectName}
        </Link>
      </Typography>
    </>
  );
}

export default BlogError;

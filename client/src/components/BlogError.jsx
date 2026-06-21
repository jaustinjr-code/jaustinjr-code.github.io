import { Typography, Link } from "@mui/material";
import {
  BlogErrorTitle,
  BlogRedirectDescription,
  BlogRedirectName,
  MediumLink,
} from "@resources/strings";
import { ResponsiveFontSizes } from "@resources/styles";

export function BlogError() {
  return (
    <>
      <Typography
        variant="h1"
        fontWeight="bold"
        sx={{
          fontSize: ResponsiveFontSizes.display,
        }}
      >
        {BlogErrorTitle}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: ResponsiveFontSizes.subheading,
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

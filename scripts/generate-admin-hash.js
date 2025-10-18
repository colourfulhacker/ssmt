const bcrypt = require('bcryptjs');

// Generate a strong admin password
const adminPassword = 'Admin@2024!SecurePass';

// Hash the password
bcrypt.hash(adminPassword, 10, (err, hash) => {
  if (err) {
    console.error('Error generating hash:', err);
    process.exit(1);
  }
  
  console.log('\n=== Admin Panel Credentials ===');
  console.log('Password:', adminPassword);
  console.log('\n=== Add this to your secrets ===');
  console.log('ADMIN_PASSWORD_HASH=' + hash);
  console.log('\nYou can also set SESSION_SECRET for additional security (optional):');
  console.log('SESSION_SECRET=' + require('crypto').randomBytes(32).toString('hex'));
  console.log('\n');
});

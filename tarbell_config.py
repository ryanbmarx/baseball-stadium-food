# -*- coding: utf-8 -*-

"""
Tarbell project configuration
"""

# Google spreadsheet key
SPREADSHEET_KEY = "1lHN02OwGCnEknjPJv0jr5gd0mUtZbi4iM3ts2BZyyoc"

# Exclude these files from publication
EXCLUDES = ['*.ai', 'node_scripts', 'subtemplates', '*.md', 'requirements.txt', 'node_modules', 'sass', 'js/src', 'package.json', 'Gruntfile.js']

# Spreadsheet cache lifetime in seconds. (Default: 4)
# SPREADSHEET_CACHE_TTL = 4

# Create JSON data at ./data.json, disabled by default
# CREATE_JSON = True

# Get context from a local file or URL. This file can be a CSV or Excel
# spreadsheet file. Relative, absolute, and remote (http/https) paths can be 
# used.
# CONTEXT_SOURCE_FILE = ""

# EXPERIMENTAL: Path to a credentials file to authenticate with Google Drive.
# This is useful for for automated deployment. This option may be replaced by
# command line flag or environment variable. Take care not to commit or publish
# your credentials file.
# CREDENTIALS_PATH = ""

# S3 bucket configuration
S3_BUCKETS = {
    # Provide target -> s3 url pairs, such as:
    #     "mytarget": "mys3url.bucket.url/some/path"
    # then use tarbell publish mytarget to publish to it
    
    "production": "graphics.chicagotribune.com/baseball-stadium-food",
    "staging": "apps.beta.tribapps.com/baseball-stadium-food",
}

# Default template variables
DEFAULT_CONTEXT = {
    '_P2P_PUBLISHING_VARIABLES_': u"Don't edit these. They'll still work, for now, but you should instead make an entry in the p2p_content_items worksheet",
    'data': {   'another_key': {   'description': u'This is another description.',
                                   'key': u'another_key'},
                'example_key': {   'description': u'This is a description of a key.',
                                   'key': u'example_key'}},
    'example_key': u'This is an example of a template variable provided by the google spreadsheet',
    'name': 'baseball-stadium-food',
    'p2p_content_items': [   {   'content_type': u'htmlstory',
                                 'template': u'_htmlstory.html'}],
    'title': 'Baseball stadium food'
}